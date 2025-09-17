declare module 'firebase/app' {
  export interface FirebaseApp {}
  export function initializeApp(config: any): FirebaseApp;
}

declare module 'firebase/firestore' {
  export interface Firestore {}
  export function getFirestore(app: import('firebase/app').FirebaseApp): Firestore;
  export function collection(db: Firestore, collectionPath: string): any;
  export function addDoc(collectionRef: any, data: any): Promise<{id: string}>;
  export function getDocs(query: any): Promise<{
    docs: Array<{
      id: string;
      data(): any;
    }>;
    size: number;
    empty: boolean;
  }>;
  
  export function query(collectionRef: any, ...queryConstraints: any[]): any;
  export function where(fieldPath: string, opStr: string, value: any): any;
  export function orderBy(fieldPath: string, directionStr?: 'asc' | 'desc'): any;
  export function limit(limit: number): any;
  
  export class Timestamp {
    static now(): Timestamp;
    seconds: number;
    nanoseconds: number;
    toDate(): Date;
    toMillis(): number;
  }
}
