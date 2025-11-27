import { useState, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';
import { useAuth } from '../context/AuthContext';

export interface Course {
    id: string;
    name: string;
    instructor: string;
    schedule: string[]; // e.g., ["Mon 10:00", "Wed 10:00"] - simplified for now
    color?: string;
    userId: string;
}

export const useCourses = () => {
    const { user } = useAuth();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setCourses([]);
            setLoading(false);
            return;
        }

        const unsubscribe = db
            .collection('courses')
            .where('userId', '==', user.uid)
            .onSnapshot(
                (snapshot) => {
                    const coursesData = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as Course[];
                    setCourses(coursesData);
                    setLoading(false);
                },
                (error) => {
                    console.error('Error fetching courses:', error);
                    setLoading(false);
                }
            );

        return () => unsubscribe();
    }, [user]);

    const addCourse = async (name: string, instructor: string, schedule: string[] = []) => {
        if (!user) throw new Error('User not authenticated');

        await db.collection('courses').add({
            userId: user.uid,
            name,
            instructor,
            schedule,
            createdAt: new Date(),
        });
    };

    return { courses, loading, addCourse };
};
