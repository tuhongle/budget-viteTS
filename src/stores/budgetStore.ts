import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth, db, colRef } from '../firestore/budgetFireStore'
import { createUserWithEmailAndPassword, signOut, deleteUser, signInWithEmailAndPassword } from 'firebase/auth'
import { type budgetType, type expenseType } from '@/types/budgetTypes'

import { onAuthStateChanged } from 'firebase/auth/cordova';
import { addDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore'

export const useBudgetStore = defineStore('budget', () => {
// Authentication

    const isNewAccount = ref<boolean>(false);
    const isAuth = ref<boolean>(false);
    const mail = ref<string>('');
    const pass = ref<string>('');
    const currentUser = ref();

    const createAccount = async () => {
        try {
            await createUserWithEmailAndPassword(auth, mail.value, pass.value);
        }
        catch (err) {
            console.log(err)
        }
    }

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, mail.value, pass.value);
        }
        catch (err : any) {
            if (err.code === 'auth/user-not-found') {
                isNewAccount.value = true;
            }
        }
    }
    
    const logOut = async () => {
        try {
            await signOut(auth);
        }
        catch (err) {
            console.log(err);
        }
    }

    const deleteAccount = async () => {
        try {
            const user = auth.currentUser;
            await deleteUser(user!);
        }
        catch (err) {
            console.log(err);
        }
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            isAuth.value = true;
            currentUser.value = user;
            // console.log(user.uid)
        } else {
            $reset();
        }
    })

    const $reset = () => {
        mail.value = '';
        pass.value = '';
        isAuth.value = false;
    }

// Budgets

    const budgets = ref<budgetType[]>([]);
    const budgetName = ref<string>('');
    const budgetAmount = ref<number>(0);

    const randomColor = () => {
        const text = 'ABCDEF0123456789';
        let color = '#';
        for (let i = 0; i < 6; i ++) {
            const j = Math.floor(Math.random() * (text.length - 1));
            color += text[j];
        };
        return color;
    }

    const createBudget = async(el) => {
        try {
            await addDoc(colRef, {
                color: randomColor(),
                name: budgetName.value,
                amount: budgetAmount.value,
                spent: 0,
                expenses: [],
                createdAt: serverTimestamp()
            });
            el.target.reset();
            await getBudgets();
        }
        catch (err) {
            console.log(err);
        }
    }

    const q = query(colRef, orderBy('createdAt'));

    const getBudgets = async() => {
        try {
            const querySnapshot = await getDocs(q);
            const budgetsList : budgetType[] = [];
            querySnapshot.forEach((doc: any) => {
                budgetsList.push({...doc.data(), id: doc.id});
            });
            budgets.value = budgetsList;
        }
        catch (err) {
            console.log(err);
        }
    }

    return {
        isNewAccount, isAuth, mail, pass, createAccount, logIn, deleteAccount, logOut
        , budgets, budgetAmount, budgetName, createBudget, getBudgets
    }
})