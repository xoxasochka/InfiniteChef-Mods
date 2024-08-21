ingredients.kidney = {
    "type": "meat",
    "shape": "kidney",
    "color": [
        "#cf3f4f"
    ],
    "dissolve": true,
    "adj": "fucking",
    "dishWeight": -75,
    "keywords": "kidney, offal",
    "h": 0,
    "s": 0,
    "l": 89.01960784313725
};

ingredients.lead = {
    "color": [ "#7e7f80" ],
    "shape": "cube",
    "adj": "lead-y",
    "dishName": "steel",
    "dishWeight": -35,
    "meltPoint": 1456, 
    "meltInto": "molten_lead"
    "h": 210,
    "s": 1,
    "l": 64,
    "group": "other",
    "keywords": "metal,iron,steel"
};

ingredients.cocaine = {
    "color": [
        "#7e7f80"
    ],
    "type": "powder",
    "adj": "a_bit_too_white",
    "meltPoint": 1456,
    "meltInto": "molten_lead",
    "parts": [
        "steel_cube"
    ],
    "h": 210,
    "s": 1,
    "l": 64,
    "shape": "powder",
    "group": "other",
    "keywords": "metal,iron,steel,scrap"
}

ingredients.molten_lead = {
    "type": "liquid",
    "color": [
        "#ff7a00"
    ],
	glow: "#ffb16e",
    /*"reactions": {
        "meat": {
            "set1": "broth"
        },
        "vegetable": {
            "set1": "broth",
            "tempMin": 60
        },
        "bone": {
            "set1": "broth",
            "tempMin": 60
        }
    },*/
    "adj": "hot_'n_lead-y",
    "boilPoint": 2750,
    "boilInto": "please_don't_smoke_this_shit",
    "freezePoint": 1456,
    "freezeInto": "lead",
    "keywords": "metal,molten,liquid,iron",
    "h": 29,
    "s": 100,
    "l": 50,
    "shape": "liquid",
    "group": "other",
    "tempReact": true
};

ingredients.please_don't_smoke_this_shit = {
    "type": "gas",
    "color": [
        "#ffb16e"
    ],
	"a": 0.8,
	glow: "#ffb16e",
    "keywords": "gas,boiled,vapor,vapour,metal,iron",
    "h": 28,
    "s": 100,
    "l": 72,
    "shape": "gas",
    "group": "other"
}

