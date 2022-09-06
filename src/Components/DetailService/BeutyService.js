export const ServiceJson = [
    {
        name: 'Manicure',
        description: 'Cosmetic beauty treatment for the nails and hands that is usually performed at home or in a beauty salon',
        img: 'https://images.hola.com/imagenes/belleza/actualidad/2017012691110/manicura-cuidado-unas/0-418-552/manicura-t.jpg',
    },
    {
        name: 'Pedicure',
        description: 'Treatment of horny skin conditions of the feet',
        img: 'https://media.glamour.mx/photos/61908fafa6e030d6480fdb9d/master/w_1600%2Cc_limit/196904.jpg',
    },
    {
        name: 'Barbershop',
        description: 'Is an exclusive space for men where beard care is their main source of inspiration. It is a new trend that is causing a furor among young people who want to show their own identity in their styling and without giving up their way of appearing abroad',
        img: 'https://sallauretta.com/wp-content/uploads/51259655_ml.jpg',
        img2: 'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/W2SNCPSRJJAITA7XHVILOQTEMI.jpg',
    },
    {
        name: 'Hairdressing',
        description: 'Short and layered. The layers have become one of the best options to show a youthful appearance and more if the hair is worn short, bob, layered length, shaggy, straight and to the shoulders, with fringe, clavicut, With waves',
        img: 'https://www.flowww.net/hubfs/Blog_Marta/potenciar-peluqueri%CC%81a.jpg',
    },
    {
        name: 'Lifting Tabs',
        description: 'Eyelash Lifting is a treatment that lengthens and creates a slight upward curve in a natural and lasting way, achieving greater length and thickness. For those who have medium or long lashes that are straight or without shape, and want to achieve a natural result, it is the perfect option!',
        img: 'http://spextensiones.com/wp-content/uploads/2018/01/spext_slide3-1.jpg',
    },
    {
        name: 'Botox',
        description: 'Botox treatment consists of small injections in the areas to be treated, which reversibly block the nerve impulse that produces muscle contraction. This creates a relaxation of the facial muscles, managing to stop the appearance of expression wrinkles temporarily.',
        img: 'https://alluringclinic.com/wp-content/uploads/2021/04/tratamiento-con-botox-madrid.jpg',
    },
    {
        name: 'Peeling',
        description: 'Dermatological treatment based on the exfoliation of the most superficial layers of the skin to promote its replacement by others of better quality and texture. The creation of new layers of the dermis and epidermis is thus induced.',
        img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/05/24153707/Peeling-facial-1920-3.jpg',
    },
    {
        name: 'Facial Cleansing',
        description: 'Deeply removes dead skin cells. Minimizes acne marks, superficial scars and fine wrinkles. It favors and improves blood circulation, oxygenating and rejuvenating the skin, making it look much prettier. It unifies the tone of the skin.',
        img: 'https://aemedicalgt.com/wp-content/uploads/2020/07/MICRODERMOABRASION-1024x683.jpg',
    },
]

export const ProviderService = [ 
    {
        name:'Andrada Beuty',
        service: ['Manicure','Peeling','Facial Cleansing','Pedicure'],
        price: {
            'Manicure': 1200,
            'Pedicure': 1200,
            'Peeling': 1200,
            'Facial Cleansing': 3500,
        }
    },
    {
        name:'Spa Dr. Marin',
        service: ['Botox','Peeling','Facial Cleansing','Lifting Tabs'],
        price: {
            'Botox': 25000,
            'Lifting Tabs': 2000,
            'Peeling': 5000,
            'Facial Cleansing': 3500,
        }
    },
    {
        name:'Adriano\'s Barbershop',
        service: ['Barbershop','Hairdressing'],
        price: {
            'Barbershop': 950,
            'Hairdressing': 1900,
        }
    },
    {
        name:'Madrid HandSpa',
        service: ['Manicure','Pedicure','Lifting Tabs'],
        price: {
            'Manicure': 1200,
            'Pedicure': 1200,
            'Lifting Tabs': 2200
        }
    },
    {
        name:'Dr. Maceda',
        service: ['Botox','Peeling','Facial Cleansing'],
        price: {
            'Botox': 20000,
            'Peeling': 4000,
            'Facial Cleansing': 4500,
        }
    },
]

/*
    manicure (polish - semipermanente) 1200
    pedicure 1200
    pestañas ondulacion y tinte (2000) extencion (2000) 
    botox 25000
    Limpieza de cutis (punta de diamante) - 3500
    Peeling 5000
*/
