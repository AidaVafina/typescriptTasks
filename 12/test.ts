import {
    getMaxIndex,
    getMaxElement,
    getMinIndex,
    getMinElement,
    getMedianIndex,
    getMedianElement,
    getAverageValue
} from './index';

const users = [];
const admins = [];

const compareUsers = (a: any, b: any) => a.age - b.age;
const compareAdmins = (a: any, b: any) => a.age - b.age;

const maxIndexUsers = getMaxIndex(users, compareUsers);
const minIndexUsers = getMinIndex(users, compareUsers);
const medianIndexUsers = getMedianIndex(users, compareUsers);

const maxElementAdmins = getMaxElement(admins, compareAdmins);
const minElementAdmins = getMinElement(admins, compareAdmins);
const medianElementAdmins = getMedianElement(admins, compareAdmins);

const avgAgeUsers = getAverageValue(users, (user: any) => user.age);
const avgAgeAdmins = getAverageValue(admins, (admin: any) => admin.age);

console.log(maxIndexUsers, minIndexUsers, medianIndexUsers);
console.log(maxElementAdmins, minElementAdmins, medianElementAdmins);
console.log(avgAgeUsers, avgAgeAdmins);