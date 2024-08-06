// collection of data 
const dataPartieDuDiscours =[
    {
        "question": "Donner la partie du discours du mot **garantir** dans la phrase:",
        "phrase": "Pour **garantir** une concurrence loyale , il convient que ces mesures soient prises au niveau international . ",
        "reponses": [
            {
                "texte": "ADV_Int",
                "correct": false
            },
            {
                "texte": "ADV",
                "correct": false
            },
            {
                "texte": "ADJ_Excl/Int",
                "correct": false
            },
            {
                "texte": "V_Inf",
                "correct": true
            },
            {
                "texte": "ADJ",
                "correct": false
            },
            {
                "texte": "Conj_de_Coord",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **loyale** dans la phrase:",
        "phrase": "Pour garantir une concurrence **loyale** , il convient que ces mesures soient prises au niveau international . ",
        "reponses": [
            {
                "texte": "DET",
                "correct": false
            },
            {
                "texte": "PRO_Int",
                "correct": false
            },
            {
                "texte": "ADJ",
                "correct": true
            },
            {
                "texte": "V_Part_Pr\u00e9s",
                "correct": false
            },
            {
                "texte": "NC",
                "correct": false
            },
            {
                "texte": "DET_Int",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **il** dans la phrase:",
        "phrase": "Pour garantir une concurrence loyale , **il** convient que ces mesures soient prises au niveau international . ",
        "reponses": [
            {
                "texte": "PRO_Suj",
                "correct": true
            },
            {
                "texte": "DET_Int",
                "correct": false
            },
            {
                "texte": "PRO_Rel",
                "correct": false
            },
            {
                "texte": "V_Subj",
                "correct": false
            },
            {
                "texte": "V_Imp",
                "correct": false
            },
            {
                "texte": "PRO_Obj",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **convient** dans la phrase:",
        "phrase": "Pour garantir une concurrence loyale , il **convient** que ces mesures soient prises au niveau international . ",
        "reponses": [
            {
                "texte": "Conj_de_Sub",
                "correct": false
            },
            {
                "texte": "V",
                "correct": true
            },
            {
                "texte": "PRO_Int",
                "correct": false
            },
            {
                "texte": "Mot_\u00e9tranger",
                "correct": false
            },
            {
                "texte": "Conj_de_Coord",
                "correct": false
            },
            {
                "texte": "DET",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **que** dans la phrase:",
        "phrase": "Pour garantir une concurrence loyale , il convient **que** ces mesures soient prises au niveau international . ",
        "reponses": [
            {
                "texte": "PREP_+_DET",
                "correct": false
            },
            {
                "texte": "Conj_de_Sub",
                "correct": true
            },
            {
                "texte": "Interj",
                "correct": false
            },
            {
                "texte": "PRO_Obj",
                "correct": false
            },
            {
                "texte": "ADV",
                "correct": false
            },
            {
                "texte": "Conj_de_Coord",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **prises** dans la phrase:",
        "phrase": "Pour garantir une concurrence loyale , il convient que ces mesures soient **prises** au niveau international . ",
        "reponses": [
            {
                "texte": "Interj",
                "correct": false
            },
            {
                "texte": "Pr\u00e9f",
                "correct": false
            },
            {
                "texte": "ADV_Int",
                "correct": false
            },
            {
                "texte": "PREP_+_DET",
                "correct": false
            },
            {
                "texte": "DET_Int",
                "correct": false
            },
            {
                "texte": "V_Part_Pass\u00e9",
                "correct": true
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **au** dans la phrase:",
        "phrase": "Pour garantir une concurrence loyale , il convient que ces mesures soient prises **au** niveau international . ",
        "reponses": [
            {
                "texte": "V_Imp",
                "correct": false
            },
            {
                "texte": "V_Inf",
                "correct": false
            },
            {
                "texte": "ADV",
                "correct": false
            },
            {
                "texte": "PREP_+_DET",
                "correct": true
            },
            {
                "texte": "Conj_de_Sub",
                "correct": false
            },
            {
                "texte": "Conj_de_Coord",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **international** dans la phrase:",
        "phrase": "Pour garantir une concurrence loyale , il convient que ces mesures soient prises au niveau **international** . ",
        "reponses": [
            {
                "texte": "ADJ",
                "correct": true
            },
            {
                "texte": "ADV",
                "correct": false
            },
            {
                "texte": "V_Subj",
                "correct": false
            },
            {
                "texte": "DET_Int",
                "correct": false
            },
            {
                "texte": "PRO_R\u00e9fl",
                "correct": false
            },
            {
                "texte": "ADJ_Excl/Int",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **qui** dans la phrase:",
        "phrase": "La proposition de r\u00e9solution , **qui** insiste , entre autres , pour que le niveau des nuisances acoustiques \u00e0 proximit\u00e9 des divers a\u00e9roports soit divulgu\u00e9 , constitue un pas en avant dans la bonne direction . ",
        "reponses": [
            {
                "texte": "PRO_Rel",
                "correct": true
            },
            {
                "texte": "PRO",
                "correct": false
            },
            {
                "texte": "PRO_R\u00e9fl",
                "correct": false
            },
            {
                "texte": "V_Imp",
                "correct": false
            },
            {
                "texte": "Interj",
                "correct": false
            },
            {
                "texte": "PREP",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **insiste** dans la phrase:",
        "phrase": "La proposition de r\u00e9solution , qui **insiste** , entre autres , pour que le niveau des nuisances acoustiques \u00e0 proximit\u00e9 des divers a\u00e9roports soit divulgu\u00e9 , constitue un pas en avant dans la bonne direction . ",
        "reponses": [
            {
                "texte": "ADV_Int",
                "correct": false
            },
            {
                "texte": "PRO_Rel",
                "correct": false
            },
            {
                "texte": "V_Part_Pass\u00e9",
                "correct": false
            },
            {
                "texte": "V",
                "correct": true
            },
            {
                "texte": "PREP",
                "correct": false
            },
            {
                "texte": "PRO_R\u00e9fl",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **autres** dans la phrase:",
        "phrase": "La proposition de r\u00e9solution , qui insiste , entre **autres** , pour que le niveau des nuisances acoustiques \u00e0 proximit\u00e9 des divers a\u00e9roports soit divulgu\u00e9 , constitue un pas en avant dans la bonne direction . ",
        "reponses": [
            {
                "texte": "PRO",
                "correct": true
            },
            {
                "texte": "V_Imp",
                "correct": false
            },
            {
                "texte": "Mot_\u00e9tranger",
                "correct": false
            },
            {
                "texte": "Pr\u00e9f",
                "correct": false
            },
            {
                "texte": "Conj_de_Sub",
                "correct": false
            },
            {
                "texte": "DET_Int",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **que** dans la phrase:",
        "phrase": "La proposition de r\u00e9solution , qui insiste , entre autres , pour **que** le niveau des nuisances acoustiques \u00e0 proximit\u00e9 des divers a\u00e9roports soit divulgu\u00e9 , constitue un pas en avant dans la bonne direction . ",
        "reponses": [
            {
                "texte": "PRO_Rel",
                "correct": false
            },
            {
                "texte": "V_Part_Pr\u00e9s",
                "correct": false
            },
            {
                "texte": "NPr",
                "correct": false
            },
            {
                "texte": "DET_Int",
                "correct": false
            },
            {
                "texte": "ADJ_Excl/Int",
                "correct": false
            },
            {
                "texte": "Conj_de_Sub",
                "correct": true
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **des** dans la phrase:",
        "phrase": "La proposition de r\u00e9solution , qui insiste , entre autres , pour que le niveau **des** nuisances acoustiques \u00e0 proximit\u00e9 des divers a\u00e9roports soit divulgu\u00e9 , constitue un pas en avant dans la bonne direction . ",
        "reponses": [
            {
                "texte": "ADJ_Excl/Int",
                "correct": false
            },
            {
                "texte": "V_Subj",
                "correct": false
            },
            {
                "texte": "=PREP_+_DET",
                "correct": true
            },
            {
                "texte": "PRO_Obj",
                "correct": false
            },
            {
                "texte": "PRO_Int",
                "correct": false
            },
            {
                "texte": "V_Part_Pass\u00e9",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **acoustiques** dans la phrase:",
        "phrase": "La proposition de r\u00e9solution , qui insiste , entre autres , pour que le niveau des nuisances **acoustiques** \u00e0 proximit\u00e9 des divers a\u00e9roports soit divulgu\u00e9 , constitue un pas en avant dans la bonne direction . ",
        "reponses": [
            {
                "texte": "Mot_\u00e9tranger",
                "correct": false
            },
            {
                "texte": "ADJ",
                "correct": true
            },
            {
                "texte": "PRO_Suj",
                "correct": false
            },
            {
                "texte": "V_Imp",
                "correct": false
            },
            {
                "texte": "V_Part_Pass\u00e9",
                "correct": false
            },
            {
                "texte": "PRO_Obj",
                "correct": false
            }
        ]
    },
    {
        "question": "Donner la partie du discours du mot **des** dans la phrase:",
        "phrase": "La proposition de r\u00e9solution , qui insiste , entre autres , pour que le niveau des nuisances acoustiques \u00e0 proximit\u00e9 **des** divers a\u00e9roports soit divulgu\u00e9 , constitue un pas en avant dans la bonne direction . ",
        "reponses": [
            {
                "texte": "DET_Int",
                "correct": false
            },
            {
                "texte": "V",
                "correct": false
            },
            {
                "texte": "PRO_R\u00e9fl",
                "correct": false
            },
            {
                "texte": "Conj_de_Coord",
                "correct": false
            },
            {
                "texte": "ADJ_Excl/Int",
                "correct": false
            },
            {
                "texte": "PREP_+_DET",
                "correct": true
            }
        ]
    }
]

export default dataPartieDuDiscours;