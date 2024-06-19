const mockCustomers = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 28,
        gender: 'Male',
        contactInfo: {
            email: 'john.doe@example.com',
            phone: '555-1234'
        },
        address: {
            street: '123 Main St',
            city: 'Springfield',
            state: 'IL',
            zip: '62701'
        },
        measurements: {
            height: '5ft 10in',
            weight: '170 lbs',
            chest: '38 in',
            waist: '32 in',
            hips: '36 in'
        },
        notesPreferences: 'Prefers casual and comfortable clothing. Allergic to wool.',
        colorPreferences: ['Blue', 'Black', 'Gray'],
        texturePreferences: ['Cotton', 'Denim']
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        age: 34,
        gender: 'Female',
        contactInfo: {
            email: 'jane.smith@example.com',
            phone: '555-5678'
        },
        address: {
            street: '456 Elm St',
            city: 'Lincoln',
            state: 'NE',
            zip: '68508'
        },
        measurements: {
            height: '5ft 6in',
            weight: '140 lbs',
            chest: '36 in',
            waist: '28 in',
            hips: '38 in'
        },
        notesPreferences: 'Loves bold patterns and bright colors. Dislikes synthetic fabrics.',
        colorPreferences: ['Red', 'Yellow', 'Pink'],
        texturePreferences: ['Silk', 'Cotton']
    },
    // Add more customers similarly
    {
        id: 3,
        firstName: 'Alice',
        lastName: 'Johnson',
        age: 22,
        gender: 'Female',
        contactInfo: {
            email: 'alice.johnson@example.com',
            phone: '555-9101'
        },
        address: {
            street: '789 Oak St',
            city: 'Madison',
            state: 'WI',
            zip: '53703'
        },
        measurements: {
            height: '5ft 7in',
            weight: '130 lbs',
            chest: '34 in',
            waist: '26 in',
            hips: '36 in'
        },
        notesPreferences: 'Prefers vintage styles. Loves lace and floral patterns.',
        colorPreferences: ['Green', 'White', 'Purple'],
        texturePreferences: ['Lace', 'Chiffon']
    },
    {
        id: 4,
        firstName: 'Bob',
        lastName: 'Brown',
        age: 45,
        gender: 'Male',
        contactInfo: {
            email: 'bob.brown@example.com',
            phone: '555-2345'
        },
        address: {
            street: '101 Pine St',
            city: 'Austin',
            state: 'TX',
            zip: '73301'
        },
        measurements: {
            height: '6ft 0in',
            weight: '200 lbs',
            chest: '42 in',
            waist: '34 in',
            hips: '38 in'
        },
        notesPreferences: 'Likes classic and tailored fits. Avoids bright colors.',
        colorPreferences: ['Navy', 'Gray', 'Black'],
        texturePreferences: ['Wool', 'Cotton']
    },
    {
        id: 5,
        firstName: 'Emily',
        lastName: 'Davis',
        age: 29,
        gender: 'Female',
        contactInfo: {
            email: 'emily.davis@example.com',
            phone: '555-3456'
        },
        address: {
            street: '202 Birch St',
            city: 'Denver',
            state: 'CO',
            zip: '80202'
        },
        measurements: {
            height: '5ft 5in',
            weight: '150 lbs',
            chest: '38 in',
            waist: '30 in',
            hips: '40 in'
        },
        notesPreferences: 'Enjoys sporty and functional clothing. Loves stretchy fabrics.',
        colorPreferences: ['Blue', 'Green', 'Black'],
        texturePreferences: ['Spandex', 'Cotton']
    },
];