import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { useAuth } from '../context/AuthContext';

export interface Task {
    id: string;
    title: string;
    courseId: string;
    dueDate: any; // Firestore Timestamp
    isCompleted: boolean;
    userId: string;
}

export const useTasks = () => {
    const { user } = useAuth();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setTasks([]);
            setLoading(false);
            return;
        }

        const unsubscribe = db
            .collection('tasks')
            .where('userId', '==', user.uid)
            .orderBy('dueDate', 'asc')
            .onSnapshot(
                (snapshot) => {
                    const tasksData = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as Task[];
                    setTasks(tasksData);
                    setLoading(false);
                },
                (error) => {
                    console.error('Error fetching tasks:', error);
                    setLoading(false);
                }
            );

        return () => unsubscribe();
    }, [user]);

    const addTask = async (title: string, courseId: string, dueDate: Date) => {
        if (!user) throw new Error('User not authenticated');

        await db.collection('tasks').add({
            userId: user.uid,
            title,
            courseId,
            dueDate,
            isCompleted: false,
            createdAt: new Date(),
        });
    };

    const toggleTaskCompletion = async (taskId: string, currentStatus: boolean) => {
        await db.collection('tasks').doc(taskId).update({
            isCompleted: !currentStatus,
        });
    };

    return { tasks, loading, addTask, toggleTaskCompletion };
};
