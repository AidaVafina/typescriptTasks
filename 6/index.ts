// В файле './index'

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person): void {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

type UserCriteria = Partial<Omit<User, 'type'>>;
type AdminCriteria = Partial<Omit<Admin, 'type'>>;

export function filterPersons(persons: Person[], personType: 'user', criteria: UserCriteria): User[];
export function filterPersons(persons: Person[], personType: 'admin', criteria: AdminCriteria): Admin[];
export function filterPersons(persons: Person[], personType: string, criteria: UserCriteria | AdminCriteria): Person[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof typeof criteria)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}
