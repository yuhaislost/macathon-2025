'use server';

import { db } from '../lib/db';
import { streaks, chats, persona, personaChat } from "./schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getStreak } from './queries';

export const createPersona = async (data: any) => {
    const { userId } = await auth();

    if (!userId)
    {
        throw new Error("Unauthenticated");
    }

    await db.insert(persona).values({
        scenarioAgent: data.scenarioAgent,
        gender: data.gender,
        personality: data.personality,
        appearence: data.appearence,
        occupation: data.occupation,
        age: data.age,
        recentExperiences: data.recentExperiences,
        backstory: data.backstory,
        datingStatus: data.datingStatus,
        romanticInterest: data.romanticInterest,
    });
}

export const updateStreak = async () => {
    const { userId } = await auth();
    
        if (!userId)
        {
            throw new Error("Unauthenticated");
        }
    
        const data = await db.query.streaks.findFirst({
            where: eq(streaks.id, userId),
        });
    
        if (!data)
        {
            throw new Error("Streak is not found.");
        }
    
        await db.update(streaks).set({
            streak: data.streak + 1,
        }).where(eq(streaks.id, userId));
    }











///DUNNO WHAT THIS STUFF IS:

export const completeQuestion = async (questionId: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        throw new Error("Unauthenticated");
    }

    const questionData = await getQuestion(questionId);

    if (!questionData)
    {
        throw new Error("Question is not found.");
    }

    if (questionData.userId != userId)
    {
        throw new Error("Unauthorised");
    }

    await db.update(question).set({
        completed: true
    }).where(eq(question.id, questionId));

    revalidatePath('/quiz');
    revalidatePath('/graveyard');
}

export const addToGraveyard = async (questionId: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        throw new Error("Unauthenticated");
    }

    const questionData = await getQuestion(questionId);

    if (!questionData)
    {
        throw new Error("Question is not found.");
    }

    if (questionData.userId != userId)
    {
        throw new Error("Unauthorised");
    }

    await db.update(question).set({
        inGraveyard: true,
    }).where(and(eq(question.id, questionId), eq(question.userId, userId)));

    revalidatePath('/quiz');
    revalidatePath('/graveyard');
}

export const removeFromGraveyard = async (questionId: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        throw new Error("Unauthenticated");
    }

    const questionData = await getQuestion(questionId);

    if (!questionData)
    {
        throw new Error("Question is not found.");
    }

    if (questionData.userId != userId)
    {
        throw new Error("Unauthorised");
    }

    await db.update(question).set({
        inGraveyard: false,
    }).where(and(eq(question.id, questionId), eq(question.userId, userId)));
    
    revalidatePath('/quiz');
    revalidatePath('/graveyard');
}




/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';
import { getKnowledge } from '@/database/queries';
import OpenAI from 'openai';


const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET_KEY
});

export const getQuestions = async () => {
    const assistantId = "asst_ohZzIQ7OhI0XLzL1px07ZhPq";

    const content = "Fish have been an important natural resource for humans since prehistoric times, especially as food. Commercial and subsistence fishers harvest fish in wild fisheries or farm them in ponds or in breeding cages in the ocean. Fish are caught for recreation, or raised by fishkeepers as ornaments for private and public exhibition in aquaria and garden ponds. Fish have had a role in human culture through the ages, serving as deities, religious symbols, and as the subjects of art, books and movies."
    const messageStructure = {
        "content": content,
    };

    const thread = await openai.beta.threads.create();
    const message = await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: JSON.stringify(messageStructure)
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantId,
    });

    // Poll for completion
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    while (runStatus.status !== "completed") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    // Get messages from the thread
    const messagesResponse = await openai.beta.threads.messages.list(thread.id);

    return messagesResponse;
}