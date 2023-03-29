export const leadership = [
    {
        title: "The Captain",
        responsibility: `The captain is the leader of the crew. He can assume the roles of all other management personnel, 
        fulfilling their functions and possessing their privileges. 
        He has the final say in all decisions. Orders given directly from the captain are mandatory. 
        The captain is the only person who can helm the ship (exceptions apply to emergency situations, 
        or if the captain gives permission). 
        Any disputes that may arise are settled by the captain. His word is final. 
        Both the head of security and the storage logistician report to the captain. `
    },
    {
        title: "The Head Of Security",
        responsibility: `The head of security is responsible for keeping the peace 
        aboard the submarine. 
        He can arrest anyone at any time. He’s also 
        responsible for dealing with any outside threats. 
        He’s the only person (along with the captain) 
        who can give crewmembers permission to use the canons and turrets. 
        Only he can authorize crewmembers to use weapons. After each mission, 
        crewmembers must report the amount of ammo they’ve used to the Head of security, 
        who must report the total amount of used ammunition to the storage logistician.  
        If there are any other security members onboard, they follow the command of the Head of security. 
        The head of security may make a member of another department an honorary gunner. 
        Honorary gunners are non-security officers who have the constant permission to use the turrets. 
        In cases of emergency, any crewmember may use the turrets. The head of security gives direct orders to the members of the security department 
        on how to fulfill their duties, 
        however The head of security must comply with the orders of the captain.`
    },
    {
        title: "The Storage Logistician",
        responsibility: `The storage logistician is responsible for the resources aboard the ship. 
        He’s the one in charge of the storage: before a crewmember takes anything from there, 
        they must consult with him. 
        He’s the only one who can authorize the crafting of items. 
        If any crewmember notices a shortage of any consumable item (oxygen tanks, welding fuel etc.), 
        he must report it to the Storage logistician. 
        Crafting requests may also be submitted to him, he has the power to authorize them. 
        The storage logistician is also the head of the engineering department (both mechanics and engineers fall under this umbrella). 
        All members of the engineering department must follow the orders of the storage logistician. 
        The storage logistician is authorized to carry a weapon and use the turrets, 
        but is not obliged to follow the orders of the Head of security.  
        The storage logistician must comply with the orders of the captain.`
    },
    {
        title: "The Council",
        responsibility: `Either the storage logistician or the head of security may challenge a captain’s order, 
        or propose an idea. In such a case, a vote is held to determine whether the proposition will go through 
        or no. The captain’s vote has an index of 1.5 , 
        whereas the individual vote of the head of security and the storage logistician is 1.`
    }
    
]

export const classes = [
    {
        id: 1,
        title: "The Mechanic",
        duties: `A mechanic’s most important duty is to fix leaks and hull breaches. 
        The mechanic must always have at least one full spare tank of welding fuel. 
        When the mechanic isn’t welding, he needs to do maintenance checks on 
        all mechanical systems and fix them in case they’re damaged.  
        If no systems need fixing, mechanics should consult with the storage 
        logistician on items that need to be crafted.
        Outside the submarine, mechanics are the ones who extract ores. 
        Yet again, they must consult with the storage logistician on which ores need to be mined. NOTE: It is mandatory for all crewmembers to be on the lookout for ores. If any crewmember finds an ore deposit, they must inform everyone through the radio. Storage logistician makes the decision on whether we stop to retrieve the ore or not. Mechanics are also useful when an outpost needs to be repaired, when looting a destroyed ship or an alien temple. N.B. Mechanics with an exosuit and a cargo scooter are very useful outside the submarine, as they have 20 additional inventory slots.
        `,
        talents: ['Ballast Denizen', 'Engine Engineer', 'Safety First', 'Modular Repairs']
    },
    {
        id: 2,
        title: "The Engineer",
        duties: `It is the engineer’s responsibility to keep the power of the submarine on at all times. 
        Engineers assigned to maintaining the reactor must always have a 
        spare fuse in their inventory. 
        When the power is on, the engineer must do maintenance check on the 
        submarine’s electrical systems and fix them if they need fixing. 
        Engineers are also responsible for the proper wiring of the ship. 
        If no systems need fixing, engineers should consult with the storage 
        logistician on items that need to be crafted. 
        Additionally, engineers should carry a welder and fix any leaks they come across first.
        Outside the submarine, engineers are needed for repairing outposts.
        `,
        talents: ['Egghead', 'Grounded', 'Remote Monitor', 'Sample Collection']
    },
    {
        id: 3,
        title: "The Medic",
        duties: `It is the medic’s responsibility to make sure that all crewmembers remain alive and in 
        condition to perform their duties. If this condition is fulfilled, 
        the medic must make sure that there’s enough medicine for everyone on the ship. 
        The items used for medicinal reasons are not part of the storage logistician’s 
        jurisdiction, and as such the medic is free to do with them as he pleases. 
        However, if an item may be needed both for medicinal and other purposes, the medic will have to 
        check with the stock logistician. The medic has constant access to the fabricator and deconstructor. 
        The doctor may also receive a salary in order to buy the needed medicinal items.`,
        talents: ['Example of Health', `Stayin' Alive`, 'Blood Donor', `Fireman's Carry`, 'No Pressure']
    },
    {
        id: 4,
        title: "The Security Officer",
        duties: `The security officer has the same responsibilities as the head of security 
        without the privileges of being part of management.
        He may not arrest anyone without the order to do so.`,
        talents: ['Buff', 'First Aid Training', 'Physical Conditioning', 'Weaponsmith']
    },
    {
        id: 5,
        title: "The Assistant",
        duties: `The assistant has no particular responsibilities, 
        instead he must follow the current order given either directly to him or to the entire crew in general. 
        He must follow the orders of both the head of security and the storage logistician. `,
        talents: ['Assistan are mailman', 'Revenge Squad']
    }
]

export const weapons = [
    {
        turretWeapons: {
            coilGuns: {
                ammo: ['Regular Ammo', 'Penetrating Ammo', 'Explosive', 'Psyichorium', 'Depleted']
            },
            pulseLaser: {
                ammo: ['Regular Ammo', 'Tri-laser']
            },
            railGuns: {
                ammo: ['Regular Ammo', 'Nuclear Shell', 'Psyicorium', 'Canister']
            },
            chainGuns: {
                notes: 'coilgun but faster and expensivel; good for crowd control',
                ammo: ['Regular Ammo', 'Psyicorium', 'Shredder']
            }
        },
        handguns: {

        }
    }
]