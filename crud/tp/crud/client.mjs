import { accountService } from "./accountService.mjs";

const newAccount = accountService.addAccount('Doe', 'John');
console.log('Nouveau compte ajouté :', newAccount);

const accounts = accountService.getAccountList();
console.log('Liste des comptes :', accounts);