import { getDatabase, ref, get, set, update, remove,onValue } from "firebase/database";
import { app } from './Connection'; // Sesuaikan path sesuai dengan struktur proyek Anda

export const selectData = async <T>(path: string): Promise<T | null> => {
    const db = getDatabase(app);
    const dbRef = ref(db, path);
    try {
        const snapshot = await get(dbRef);
        if (await snapshot.exists()) {
            return snapshot.val() as T;
        } else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        console.error("Error getting data:", error);
        throw error;
    }
};

export const subscribeToDataChanges = <T>(path: string, callback: (data: T | null) => void): void => {
    const db = getDatabase(app);
    const dbRef = ref(db, path);
    onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val() as T);
        } else {
            callback(null);
        }
    }, (error) => {
        console.error("Error subscribing to data changes:", error);
    });
};

export const setData = async (path: string, data: any): Promise<void> => {
    const db = getDatabase(app);
    const dbRef = ref(db, path);
    try {
        await set(dbRef, data);
    } catch (error) {
        console.error("Error setting data:", error);
        throw error;
    }
};

export const updateData = async (path: string, data: any): Promise<void> => {
    const db = getDatabase(app);
    const dbRef = ref(db, path);
    try {
        await update(dbRef, data);
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
};

export const removeData = async (path: string): Promise<void> => {
    const db = getDatabase(app);
    const dbRef = ref(db, path);
    try {
        await remove(dbRef);
    } catch (error) {
        console.error("Error removing data:", error);
        throw error;
    }
};