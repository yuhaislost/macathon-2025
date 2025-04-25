import { cache } from "react";
import { db } from '../lib/db';
import { auth } from '@clerk/nextjs/server';
import { streaks, chats, persona, personaChat } from "./schema";
import { eq } from "drizzle-orm";

export const getStreak = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.streaks.findFirst({
        where: eq(streaks.id, userId),
    });

    if (!data)
    {
        return null;
    }

    return {...data};
});


export const getHistory = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.chats.findFirst({
        where: eq(chats.userId, userId),
    });

    if (!data?.feedback)
    {
        return null;
    }

    return { history: data.history };
});


export const getFeedback = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.chats.findFirst({
        where: eq(chats.userId, userId),
    });

    if (!data?.feedback)
    {
        return null;
    }

    return { feedback: data.feedback };
});


export const getRating = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.chats.findFirst({
        where: eq(chats.userId, userId),
    });

    if (!data?.rating)
    {
        return null;
    }

    return { rating: data.rating };
});

export const getUpdatedAt = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.chats.findFirst({
        where: eq(chats.userId, userId),
    });

    if (!data?.updatedAt)
    {
        return null;
    }

    return { updatedAt: data.updatedAt };
});

export const getCreatedAt = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.chats.findFirst({
        where: eq(chats.userId, userId),
    });

    if (!data?.createdAt)

    {
        return null;
    }

    return { createdAt: data.createdAt };
});

export const getUserId = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.chats.findFirst({
        where: eq(chats.userId, userId),
    });

    if (!data?.userId)

    {
        return null;
    }

    return { userId: data.userId };
});

export const getSetting = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.chats.findFirst({
        where: eq(chats.userId, userId),
    });

    if (!data?.setting)

    {
        return null;
    }

    return { setting: data.setting };
});

export const getSuggestions = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.chats.findFirst({
        where: eq(chats.userId, userId),
    });

    if (!data?.suggestions)

    {
        return null;
    }

    return { suggestions: data.suggestions };
});




export const getScenarioAgent = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });

    if (!data?.scenarioAgent)

    {
        return null;
    }

    return { scenarioAgent: data.scenarioAgent };
});

export const getGender = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });

    if (!data?.gender)

    {
        return null;
    }

    return { gender: data.gender };
});

export const getPersonality = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });

    if (!data?.personality)

    {
        return null;
    }

    return { personality: data.personality };
});

export const getAppearence = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });

    if (!data?.appearence)

    {
        return null;
    }

    return { appearence: data.appearence };
});

export const getOccupation = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });
    if (!data?.occupation)

    {
        return null;
    }

    return { occupation: data.occupation };
});

export const getAge = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });
    if (!data?.age)

    {
        return null;
    }

    return { age: data.age };
});

export const getRecentExperiences = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });

    if (!data?.recentExperiences)

    {
        return null;
    }

    return { recentExperiences: data.recentExperiences };
});

export const getBackstory = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });

    if (!data?.backstory)

    {
        return null;
    }

    return { backstory: data.backstory };
});

export const getDatingStatus = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });
    if (!data?.datingStatus)

    {
        return null;
    }

    return { datingStatus: data.datingStatus };
});

export const getRomanticInterest = cache( async (personaId: personaId) => {
    const { userId } = await auth();

    if (!userId || !personaId)
    {
        return null;
    }

    const data = await db.query.persona.findFirst({
        where: eq(persona.id, personaId),
    });

    if (!data?.romanticInterest)

    {
        return null;
    }

    return { romanticInterest: data.romanticInterest };
});




export const getPersonaId = cache( async (chatId: chatId) => {
    const { userId } = await auth();

    if (!chatId || !userId)
    {
        return null;
    }

    const data = await db.query.personaChat.findFirst({
        where: eq(personaChat.chatId, chatId),
    });

    if (!data?.personaId)

    {
        return null;
    }

    return { personaId: data.personaId };
});

