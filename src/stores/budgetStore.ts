import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { auth, db, colRef } from '../firestore/budgetFireStore'
import { createUserWithEmailAndPassword, signOut, deleteUser, signInWithEmailAndPassword } from 'firebase/auth'
import { type budgetType, type expenseType } from '@/types/budgetTypes'
import { useToast } from "vue-toastification"

import { onAuthStateChanged } from 'firebase/auth/cordova';
import { addDoc, arrayRemove, arrayUnion, deleteDoc, doc, getDoc, getDocs, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore'

export const useBudgetStore = defineStore('budget', () => {
//? Toasts
    const toast = useToast();

//? Authentication
    const Router = useRouter();
    const isNewAccount = ref<boolean>(false);
    const isWrongPass = ref<boolean>(false);
    const needLogInAgain = ref<boolean>(false);
    const isAuth = ref<boolean>(false);
    const mail = ref<string>('');
    const pass = ref<string>('');
    const currentUser = ref<string>('');
    const oldUser = ref<boolean>(true);

    const createAccount = async () => {
        try {
            await createUserWithEmailAndPassword(auth, mail.value, pass.value);
            oldUser.value = false;
            toast.success(`Welcome, ${mail.value}`);
        }
        catch (err) {
            console.log(err)
        }
    }

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, mail.value, pass.value);
            oldUser.value = true;
            toast.success(`Welcome, ${mail.value}`)
        }
        catch (err : any) {
            if (err.code === 'auth/user-not-found') {
                isNewAccount.value = true;
                isWrongPass.value = false;
            } else if (err.code === 'auth/wrong-password'){
                isNewAccount.value = false;
                isWrongPass.value = true;
            }
        }
    }
    
    const logOut = async () => {
        try {
            confirm('You wanna sign out?');
            await signOut(auth);
            toast.error('You have signed out!')
        }
        catch (err) {
            console.log(err);
        }
    }

    const deleteAccount = async () => {
        try {
            confirm('Delete user and all data?');
            const user = auth.currentUser;
            await deleteUser(user!);
            toast.error("You've delete your account!");
        }
        catch (err: any) {
            if (err.code === 'auth/requires-recent-login') {
                needLogInAgain.value = true;
            } else {
                console.log(err)
            }
        }
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            isAuth.value = true;
            currentUser.value = user.email!;
        } else {
            currentUser.value = '';
            $reset();
        }
    })

    const $reset = () => {
        mail.value = '';
        pass.value = '';
        isAuth.value = false;
        oldUser.value = true;
        isWrongPass.value = false;
        isNewAccount.value = false;
        needLogInAgain.value = false;
    }

//? Budgets

    const budgets = ref<budgetType[]>([]);
    const budgetsNameList = ref<string[]>([]);
    const budgetName = ref<string>('');
    const budgetAmount = ref<number | null>(null);
    const budgetChoose = ref<string>('');
    const budgetDetail = ref<any>();

    const randomColor = () => {
        const text = 'ABCDEF0123456789';
        let color = '#';
        for (let i = 0; i < 6; i ++) {
            const j = Math.floor(Math.random() * (text.length - 1));
            color += text[j];
        };
        return color;
    };

    const resetInput = () => {
        budgetAmount.value = null;
        budgetName.value = '';
        expenseAmount.value = null;
        expenseName.value = '';
    }

    const createBudget = async(el : Event) => {
        try {
            await addDoc(colRef, {
                color: randomColor(),
                name: budgetName.value,
                amount: budgetAmount.value,
                spent: 0,
                expenses: [],
                createdAt: serverTimestamp()
            });
            await getBudgets();
            budgetAmount.value = null;
            budgetName.value = '';
            (el.target as HTMLFormElement).reset();
            toast.info('Budget created!');
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
            budgetsNameList.value = budgetsList.map(el => el.name);
            budgetChoose.value = budgetsNameList.value[budgetsNameList.value.length - 1];
        }
        catch (err) {
            console.log(err);
        }
    }

    
    const getBudget = async(id: string) => {
        try {
            const docRef = doc(db, "budgets", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                budgetDetail.value = {...docSnap.data(), id};
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const deleteBudget = async(id: string) => {
        try {
            confirm('Are you sure you want to permanently delete this budget?');
            const docRef = doc(db, "budgets", id);
            await deleteDoc(docRef);
            Router.push('/');
            budgetAmount.value = null;
            budgetName.value = '';
            toast.error('Budget deleted successfully!');
        }
        catch (err) {
            console.log(err);
        }
    }

//? Expenses

    const expenses = ref<expenseType[]>([]);
    const expenseName = ref<string>('');
    const expenseAmount = ref<number | null>(null);

    const addExpense = async(el: Event) => {
        try {
            const budget = budgets.value.find(el => el.name === budgetChoose.value);
            const budgetID = budget?.id;
            const spent = budget!.spent + expenseAmount.value!;
            const docRef = doc(db, "budgets", budgetID!);
            await updateDoc(docRef, {
                expenses: arrayUnion({
                    name: expenseName.value,
                    amount: expenseAmount.value,
                    createdAt: new Date().toLocaleDateString('en-US'),
                    budgetID: budget!.id,
                    budgetName: budget!.name,
                    budgetColor: budget!.color
                }),
                spent
            });
            await getBudgets();
            getExpenses();
            toast.info(`Expense ${expenseName.value} created!`);
            expenseAmount.value = null;
            expenseName.value = '';
            (el.target as HTMLFormElement).reset();
        }
        catch (err) {
            console.log(err);
        }
    }

    const addExpenseOnDetail = async(el: Event, budget: budgetType) => {
        try {
            const budgetID = budget?.id;
            const spent = budget!.spent + expenseAmount.value!;
            const docRef = doc(db, "budgets", budgetID!);
            await updateDoc(docRef, {
                expenses: arrayUnion({
                    name: expenseName.value,
                    amount: expenseAmount.value,
                    createdAt: new Date().toLocaleDateString('en-US'),
                    budgetID: budget!.id,
                    budgetName: budget!.name,
                    budgetColor: budget!.color
                }),
                spent
            });
            await getBudget(budgetID);
            toast.info(`Expense ${expenseName.value} created!`);
            expenseAmount.value = null;
            expenseName.value = '';
            (el.target as HTMLFormElement).reset();
        }
        catch (err) {
            console.log(err)
        }
    }

    const getExpenses = () => {
        const expensesArr : expenseType[] = [];
        budgets.value.forEach(el => {
            expensesArr.unshift(...el.expenses);
        })
        expenses.value = expensesArr;
    }

    const deleteExpense = async(data: expenseType) => {
        const docRef = doc(db, 'budgets', data.budgetID);
        const budget = budgets.value.find(el => el.id === data.budgetID);
        const spent = budget!.spent - data.amount;
        await updateDoc(docRef, {
            expenses: arrayRemove(data),
            spent
        });
        await getBudgets();
        await getBudget(data.budgetID);
        getExpenses();
        toast.warning('Expense deleted!');
    }

    const deleteExpenseOnDetail = async(data: expenseType) => {
        const docRef = doc(db, 'budgets', data.budgetID);
        const spent = budgetDetail.value.spent - data.amount;
        await updateDoc(docRef, {
            expenses: arrayRemove(data),
            spent
        });
        await getBudget(data.budgetID);
        toast.warning('Expense deleted!');
    }

    return {
        isNewAccount, isWrongPass, needLogInAgain, isAuth, mail, pass, currentUser, oldUser, createAccount, logIn, deleteAccount, logOut
        , budgets, budgetAmount, budgetName, budgetsNameList, budgetChoose, budgetDetail, createBudget, getBudgets, getBudget, deleteBudget, resetInput
        , expenses, expenseAmount, expenseName, addExpense, getExpenses, deleteExpense, addExpenseOnDetail, deleteExpenseOnDetail
    }
})