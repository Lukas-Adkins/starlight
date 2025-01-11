// Critical Damage Tables for the Starlight System
export const CRITICAL_DAMAGE_ENERGY = {
  title: "Critical Damage (E)",
  sections: [
    {
      heading: "Energy, Arm",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The energy pulse disrupts motor function in the arm. All tests using that arm suffer a –30 penalty for 1d5 rounds.",
          },
          {
            crit: 2,
            effect:
              "A direct hit overloads the nervous system, rendering the arm non-functional for 1d5 rounds. The target also suffers 1 level of Fatigue.",
          },
          {
            crit: 3,
            effect:
              "Superficial burns cause significant discomfort. The target suffers 1d5 Fatigue and can only take a Half Action during their next turn.",
          },
          {
            crit: 4,
            effect:
              "Neurological shock causes temporary motor dysfunction. The target is Stunned for 1 round, knocked Prone, and the arm is non-functional for 1d10 rounds.",
          },
          {
            crit: 5,
            effect:
              "Severe thermal damage renders the arm inoperable until treated. The target is Stunned for 1 round.",
          },
          {
            crit: 6,
            effect:
              "Intense heat damage causes localized fusion of materials and tissue. The target suffers 1d5 Fatigue, 1d5 Weapon Skill and Ballistic Skill damage, and must make a Challenging (+0) Toughness test or lose the hand.",
          },
          {
            crit: 7,
            effect:
              "Thermal stress fractures the bone and damages the marrow. The target suffers 1d5 Fatigue, is Stunned for 1 round, and the arm remains inoperable until repaired.",
          },
          {
            crit: 8,
            effect:
              "Severe dermal and muscular degradation exposes underlying bone. The target suffers 1d10 Fatigue and must make a Challenging (+0) Toughness test or be Stunned for 1d5 rounds. The arm is permanently lost.",
          },
          {
            crit: 9,
            effect:
              "Critical burns destroy the limb entirely, reducing it to non-functional tissue and bone. The target must make a Challenging (+0) Toughness test or die from shock. If they survive, they lose the arm.",
          },
          {
            crit: 10,
            effect:
              "The arm is vaporized, and the target collapses due to overwhelming trauma, dying immediately.",
          },
        ],
      },
    },
    {
      heading: "Energy, Body",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The energy impact causes the target to lose their breath. Only a Half Action is possible on their next turn.",
          },
          {
            crit: 2,
            effect:
              "The force of the hit destabilizes the target. They must make a Challenging (+0) Toughness test or be knocked Prone.",
          },
          {
            crit: 3,
            effect:
              "Thermal exposure damages epidermal layers and muscle tissue, resulting in 2 levels of Fatigue and 1d5 Toughness damage.",
          },
          {
            crit: 4,
            effect:
              "Third-degree burns and widespread pain cause the target to suffer 1d10 Fatigue. Only a Half Action is possible on their next turn.",
          },
          {
            crit: 5,
            effect:
              "The concussive force and thermal shock cause the target to collapse. They are knocked Prone, may catch fire (Challenging +0 Agility test), and are Stunned for 1 round.",
          },
          {
            crit: 6,
            effect:
              "The energy discharge destabilizes the target and causes severe burns. They are Stunned for 1d10 rounds, knocked Prone, and may catch fire (Challenging +0 Agility test).",
          },
          {
            crit: 7,
            effect:
              "Organ failure occurs due to thermal damage. The target is Stunned for 2d10 rounds, and their Toughness is permanently reduced by 1d10.",
          },
          {
            crit: 8,
            effect:
              "Extreme energy exposure causes necrosis and fluid seepage from the wound. The target is Stunned for 2d10 rounds, and Strength, Toughness, and Agility are halved until treated. Permanently reduce Fellowship by 2d5.",
          },
          {
            crit: 9,
            effect:
              "Thermal overload incinerates the target entirely. Death is instantaneous.",
          },
          {
            crit: 10,
            effect:
              "Any stored ammunition ignites. Roll 1d10; on 6+, nearby targets suffer 1d10+5 Explosive damage to a random location. Grenades or missiles detonate after 1 round.",
          },
        ],
      },
    },
    {
      heading: "Energy, Head",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "A glancing blow causes temporary disorientation, resulting in a –10 penalty to all tests (except Toughness) for 1 round.",
          },
          {
            crit: 2,
            effect: "Flash exposure temporarily blinds the target for 1 round.",
          },
          {
            crit: 3,
            effect:
              "A focused hit damages auditory structures. The target is Deafened for 1d5 hours unless treated.",
          },
          {
            crit: 4,
            effect:
              "The energy burns away hair and inflicts surface burns. The target suffers 2 levels of Fatigue and is Blinded for 1d5 rounds.",
          },
          {
            crit: 5,
            effect:
              "Severe cranial burns incapacitate the target. They are Blinded for 1d10 rounds, Stunned for 1 round, and lose all hair. Permanently reduce Fellowship by 1.",
          },
          {
            crit: 6,
            effect:
              "Severe damage melts facial features, impairing vision. The target suffers 1d5 Fatigue, is Blinded for 1d10 hours, and loses 1d5 Fellowship and Perception permanently.",
          },
          {
            crit: 7,
            effect:
              "Intense thermal damage fractures the skull. The target suffers 1d10 Fatigue, permanent Blindness, and significant aesthetic and functional degradation (new Fellowship score determined).",
          },
          {
            crit: 8,
            effect: "Catastrophic cranial failure leads to immediate death.",
          },
          {
            crit: 9,
            effect:
              "Overpressure from thermal overload causes the brain to rupture. Death is instantaneous.",
          },
          {
            crit: 10,
            effect:
              "Overwhelming energy causes full-body combustion, sending the headless target running for 2d10 meters. Anything flammable in its path risks ignition.",
          },
        ],
      },
    },
    {
      heading: "Energy, Head",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "A grazing energy pulse causes momentary disorientation. The target suffers a –10 penalty to all tests (except Toughness tests) for 1 round.",
          },
          {
            crit: 2,
            effect:
              "The energy flash temporarily overloads the target’s visual sensors or natural sight. They are Blinded for 1 round.",
          },
          {
            crit: 3,
            effect:
              "Localized burns damage sensitive auditory nerves. The target is Deafened for 1d5 hours (or until treated).",
          },
          {
            crit: 4,
            effect:
              "The energy burst scorches the target’s scalp and disrupts their equilibrium. The target suffers 2 levels of Fatigue and is Blinded for 1d5 rounds.",
          },
          {
            crit: 5,
            effect:
              "An intense blast causes severe burns to the face and head, damaging the skin and sensory organs. The target is Blinded for 1d10 rounds, Stunned for 1 round, and permanently reduces their Fellowship characteristic by 1 due to scarring.",
          },
          {
            crit: 6,
            effect:
              "Extreme thermal damage deforms the face and burns the eyes. The target suffers 1d5 levels of Fatigue, is Blinded for 1d10 hours, and permanently reduces both Fellowship and Perception characteristics by 1d5.",
          },
          {
            crit: 7,
            effect:
              "Critical thermal exposure chars the head, leaving the underlying structure exposed. The target suffers 1d10 levels of Fatigue, is permanently Blinded, and must roll 1d10 to determine their new Fellowship characteristic. If Fellowship is already 10 or lower, this step is skipped.",
          },
          {
            crit: 8,
            effect:
              "The head is catastrophically damaged by the energy discharge. The target does not survive.",
          },
          {
            crit: 9,
            effect:
              "The intense energy pulse causes rapid neural overload, resulting in the destruction of the brain and catastrophic cranial failure. The target dies instantly.",
          },
          {
            crit: 10,
            effect:
              "As above, but the intense energy ignites the body, causing it to stagger uncontrollably for 2d10 meters in a random direction (use a scatter diagram). Anything flammable in its path must pass a Challenging (+0) Agility test or catch fire.",
          },
        ],
      },
    },
    {
      heading: "Energy, Mech",
      table: {
        columns: ["Critical", "Critical Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "An electrical short disables a random Core System at or adjacent to the Hit Location for 1d5 rounds.",
          },
          {
            crit: 2,
            effect:
              "Arcing electricity causes a fire in the cockpit. The pilot must pass a +0 Agility test or catch fire.",
          },
          {
            crit: 3,
            effect:
              "Energy damage fuses circuits and melts key components. A random Core System at or adjacent to the Hit Location is unusable until repaired.",
          },
          {
            crit: 4,
            effect:
              "Critical system damage disrupts piloting. The pilot is Stunned for 1 round and suffers a -10 penalty to all mech operation tests for the next hour.",
          },
          {
            crit: 5,
            effect:
              "Energy surges through the mech, severely burning the pilot. The pilot suffers 1d10 Fatigue and can only take a Half Action on their next turn. The mech gains the Run-down trait until repaired.",
          },
          {
            crit: 6,
            effect:
              "Catastrophic energy damage destroys a random Core System at or adjacent to the Hit Location. The mech gains the Derelict trait until repaired.",
          },
          {
            crit: 7,
            effect:
              "1d5 Core Systems are destroyed by energy overload. The cockpit overheats, Stunning the pilot for 1 round and causing 1d5 Fatigue.",
          },
          {
            crit: 8,
            effect:
              "All Core Systems are rendered inoperable, and the mech is completely totaled.",
          },
          {
            crit: 9,
            effect:
              "Total system failure tears the mech apart, killing the pilot instantly.",
          },
          {
            crit: 10,
            effect:
              "The mech’s reactor overloads and explodes. The pilot is vaporized, and all targets within 15 meters take 5d10 Energy damage.",
          },
        ],
      },
    },
  ],
};

export const CRITICAL_DAMAGE_EXPLOSIVE = {
  title: "Critical Damage (X)",
  sections: [
    {
      heading: "Explosive, Arm",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The blast force violently wrenches the arm, causing severe strain. The target suffers 1 level of Fatigue.",
          },
          {
            crit: 2,
            effect:
              "The explosion fractures the bones in the arm, causing the target to drop whatever they were holding. The target must pass a Challenging (+0) Toughness test or be Stunned for 1 round.",
          },
          {
            crit: 3,
            effect:
              "The explosion shears off a finger and damages nearby tissues. The target suffers 1d10 Weapon Skill and 1d10 Ballistic Skill damage. Any item held in the hand is destroyed. If holding an explosive device, resolve the '9' effect on this table immediately.",
          },
          {
            crit: 4,
            effect:
              "The blast causes severe ligament and tissue damage in the arm. The target is Stunned for 1 round and must pass a Challenging (+0) Toughness test or suffer Blood Loss. The limb is Useless until treated.",
          },
          {
            crit: 5,
            effect:
              "Shrapnel tears into the target’s hand, causing critical damage. The target must pass an Ordinary (+10) Toughness test. On success, their Weapon Skill and Ballistic Skill characteristics are permanently reduced by 1. On failure, they suffer the Lost Hand condition.",
          },
          {
            crit: 6,
            effect:
              "The explosion shatters the bones in the arm and destroys surrounding tissue. The target suffers Blood Loss, 1d5 levels of Fatigue, and the arm is Useless until treated.",
          },
          {
            crit: 7,
            effect:
              "The arm is destroyed by the explosion, leaving significant trauma. The target must pass a Challenging (+0) Toughness test or die from shock. If they survive, they suffer 1d10 levels of Fatigue, are Stunned for 1d10 rounds, and suffer Blood Loss. The Lost Arm condition applies.",
          },
          {
            crit: 8,
            effect:
              "The explosion obliterates the arm, causing severe damage to the shoulder and chest. The target collapses and dies from critical trauma.",
          },
          {
            crit: 9,
            effect:
              "The explosion rips the arm off entirely, instantly killing the target. If the target was holding a powered weapon, it explodes, causing 1d10+5 Impact damage to a random Hit Location for anyone within two meters.",
          },
          {
            crit: 10,
            effect:
              "As above, but if the target was carrying ammunition, it detonates, causing 1d10+5 Impact damage to a random Hit Location for anyone within 1d10 meters. Any grenades or missiles the target carried also detonate immediately.",
          },
        ],
      },
    },
    {
      heading: "Explosive, Body",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The explosion throws the target backwards 1d5 meters, knocking them Prone.",
          },
          {
            crit: 2,
            effect:
              "The blast hurls the target backwards 1d5 meters, inflicting 1 level of Fatigue per meter traveled. The target is knocked Prone.",
          },
          {
            crit: 3,
            effect:
              "The target is thrown to the ground by the force of the explosion. They are knocked 1d5 meters backwards, Stunned for 1 round, and are knocked Prone.",
          },
          {
            crit: 4,
            effect:
              "The blast causes severe internal injuries. The target must pass a Challenging (+0) Toughness test or suffer Blood Loss and be Stunned for 1 round.",
          },
          {
            crit: 5,
            effect:
              "The concussive force of the explosion incapacitates the target. They suffer 1d5 levels of Fatigue, are knocked Prone, and must pass a Challenging (+0) Toughness test. On failure, they suffer Blood Loss and permanently reduce their Toughness characteristic by 1.",
          },
          {
            crit: 6,
            effect:
              "The explosion rips away flesh, leaving large, open wounds. The target is Stunned for 1 round and suffers Blood Loss.",
          },
          {
            crit: 7,
            effect:
              "The explosive force disrupts the nervous system and causes significant trauma. The target is Stunned for 1d10 rounds, is knocked Prone, suffers Blood Loss, and must pass a Challenging (+0) Toughness test or fall Unconscious.",
          },
          {
            crit: 8,
            effect:
              "The explosion causes catastrophic damage to the torso, resulting in immediate death.",
          },
          {
            crit: 9,
            effect:
              "The blast obliterates the target, scattering remains. If the target was carrying ammunition, it detonates, causing 1d10+5 Impact damage to a random Hit Location for anyone within 1d10 meters. Any grenades or missiles the target carried also detonate immediately.",
          },
          {
            crit: 10,
            effect:
              "As above, but anyone within 1d10 meters is covered in blood and debris. Each affected character must pass a Challenging (+0) Agility test or suffer a –10 penalty to Weapon Skill and Ballistic Skill tests for 1 round due to fouled vision.",
          },
        ],
      },
    },
    {
      heading: "Explosive, Head",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The blast disorients the target. They can take only a Half Action on their next turn as they recover their senses.",
          },
          {
            crit: 2,
            effect:
              "The flash and concussive noise temporarily overload the target’s senses. They are Blinded and Deafened for 1 round.",
          },
          {
            crit: 3,
            effect:
              "The explosion leaves the target’s face covered in lacerations. Permanent scarring is likely. The target suffers 2 levels of Fatigue and must pass a Challenging (+0) Toughness test or lose 1d10 Perception and Fellowship points.",
          },
          {
            crit: 4,
            effect:
              "The force of the blast knocks the target to the ground and causes cognitive disruption. The target suffers 1d10 Intelligence damage, is knocked Prone, and must pass a Challenging (+0) Toughness test. On failure, they are Stunned for 2 rounds, and their Intelligence characteristic is permanently reduced by 1.",
          },
          {
            crit: 5,
            effect:
              "The explosion severely damages the face and auditory system. The target is Stunned for 1d10 rounds, permanently Deafened, and loses 1d5 Fellowship points due to disfigurement.",
          },
          {
            crit: 6,
            effect:
              "The explosion causes catastrophic cranial trauma, instantly killing the target as their body collapses lifelessly to the ground.",
          },
          {
            crit: 7,
            effect:
              "The head and upper body are obliterated in the explosion, killing the target instantly. If the target was carrying ammunition, it detonates, causing 1d10+5 Impact damage to a random Hit Location for anyone within 1d5 meters. Grenades or missiles carried by the target also detonate immediately.",
          },
          {
            crit: 8,
            effect:
              "The head and torso are critically damaged, leaving a gory mess. Movement through this area requires a Challenging (+0) Agility test to avoid slipping and falling Prone.",
          },
          {
            crit: 9,
            effect:
              "The target is vaporized in the explosion, leaving behind a fine mist. The target is entirely destroyed.",
          },
          {
            crit: 10,
            effect:
              "As above, but the destruction is so horrifying that all allies within two meters must pass a Challenging (+0) Willpower test. On failure, they must flee from the attacker on their next turn.",
          },
        ],
      },
    },
    {
      heading: "Explosive, Leg",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "A glancing blast knocks the target back one meter. They must pass a Challenging (+0) Toughness test or be knocked Prone.",
          },
          {
            crit: 2,
            effect:
              "The explosion sweeps the target’s legs out from under them. They are knocked Prone and can only perform Half Move actions for 1d5 rounds.",
          },
          {
            crit: 3,
            effect:
              "The concussive force fractures the leg, causing severe pain. The target suffers 2d10 Agility damage.",
          },
          {
            crit: 4,
            effect:
              "The explosion flings the target 1d5 meters in a random direction. They must spend a Full Action to stand, and their Movement is halved for 1d10 rounds.",
          },
          {
            crit: 5,
            effect:
              "The explosive force partially destroys the target’s foot. They must pass a Difficult (–10) Toughness test or suffer 1d5 levels of Fatigue and permanently lose 1d5 Agility points.",
          },
          {
            crit: 6,
            effect:
              "The explosion shatters the bones and ruptures tissue in the leg. The target suffers 1d10 levels of Fatigue. The leg is Useless until treated. On failing a Challenging (+0) Toughness test, the target suffers the Lost Foot condition.",
          },
          {
            crit: 7,
            effect:
              "The explosion obliterates the leg. The target must pass a Challenging (+0) Toughness test or die from shock. If they survive, they suffer 1d10 levels of Fatigue, are Stunned for 1d10 rounds, and suffer Blood Loss. The Lost Leg condition applies.",
          },
          {
            crit: 8,
            effect:
              "The explosion severs the leg entirely, causing critical blood loss. The target dies instantly as blood rapidly drains from the wound.",
          },
          {
            crit: 9,
            effect:
              "The leg is destroyed in a violent blast, killing the target instantly. Fragments of bone and material strike all targets within 2 meters, causing 1d10+2 Impact damage to a random Hit Location.",
          },
          {
            crit: 10,
            effect:
              "As above, but if the target is carrying ammunition, it detonates, causing 1d10+5 Impact damage to a random Hit Location for anyone within 1d10 meters. Any grenades or missiles carried by the target also detonate with their usual effects.",
          },
        ],
      },
    },
    {
      heading: "Explosive, Mech",
      table: {
        columns: ["Critical", "Critical Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The explosion throws the mech backward 3d10 meters and knocks it Prone.",
          },
          {
            crit: 2,
            effect:
              "The blast dislodges any held equipment. The pilot must pass a +0 Operate test or be Stunned for 1 round.",
          },
          {
            crit: 3,
            effect:
              "Explosive force disables all Core Systems at the Hit Location for 1d5 rounds.",
          },
          {
            crit: 4,
            effect:
              "The explosion rattles the mech. It gains the Run-down trait until repaired, and the pilot must pass a +0 Toughness test or be Stunned for 1 round.",
          },
          {
            crit: 5,
            effect:
              "The blast leaves severe structural damage. All Core Systems at the Hit Location are unusable until repaired.",
          },
          {
            crit: 6,
            effect:
              "The force of the explosion destroys all Core Systems at the Hit Location permanently.",
          },
          {
            crit: 7,
            effect:
              "The cockpit partially collapses, trapping the pilot. The pilot is Stunned for 1d10 rounds, knocked Prone, and must pass a +0 Toughness test or fall unconscious. The mech gains the Derelict trait.",
          },
          {
            crit: 8,
            effect:
              "Internal explosions destroy all Core Systems. The pilot suffers 4d10 explosive damage.",
          },
          {
            crit: 9,
            effect:
              "The mech explodes, destroying itself and the pilot. All targets within 15 meters take 5d10 Energy damage.",
          },
          {
            crit: 10,
            effect:
              "The mech explodes violently, scattering debris. All targets within 15 meters take 5d10 Energy damage, and all targets within 50 meters must pass a +0 Dodge test or take 3d10 Impact damage.",
          },
        ],
      },
    },
  ],
};

export const CRITICAL_DAMAGE_IMPACT = {
  title: "Critical Damage (I)",
  sections: [
    {
      heading: "Impact, Arm",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The blow strikes the arm, causing the target to drop anything held in that hand.",
          },
          {
            crit: 2,
            effect:
              "A heavy strike leaves bruising and minor fractures. The target suffers 1 level of Fatigue.",
          },
          {
            crit: 3,
            effect:
              "The impact wrenches the arm painfully, forcing the target to drop anything held in that hand. The target is Stunned for 1 round. Roll 1d10; on a 1, the dropped item is damaged and unusable until repaired.",
          },
          {
            crit: 4,
            effect:
              "The strike crushes muscle and bone. The target drops anything in that hand and must pass a Challenging (+0) Toughness test or suffer 1d10 Weapon Skill and 1d10 Ballistic Skill damage.",
          },
          {
            crit: 5,
            effect:
              "The attack causes severe damage to the arm. The limb is Useless until the target receives medical attention.",
          },
          {
            crit: 6,
            effect:
              "The impact crushes the hand, breaking 1d5 fingers. The target suffers 1 level of Fatigue and must pass a Challenging (+0) Toughness test. On failure, permanently reduce their Weapon Skill and Ballistic Skill characteristics by 2.",
          },
          {
            crit: 7,
            effect:
              "The arm is shattered, leaving it limp and bleeding. The target suffers Blood Loss. The arm is Useless until treated.",
          },
          {
            crit: 8,
            effect:
              "The force of the strike dismembers the arm near the shoulder. The target must pass a Challenging (+0) Toughness test or die from shock. If they survive, they suffer 1d5 levels of Fatigue, are Stunned for 1d10 rounds, and suffer Blood Loss. The Lost Arm condition applies.",
          },
          {
            crit: 9,
            effect:
              "The arm is severed by the force of the blow, causing the target to collapse and die shortly after due to severe trauma and blood loss.",
          },
          {
            crit: 10,
            effect:
              "As above, but fragments of bone, flesh, and other debris from the severed arm strike anyone within 2 meters, dealing 1d5–3 Impact damage to a random Hit Location.",
          },
        ],
      },
    },
    {
      heading: "Impact, Body",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The blow forces the air from the target’s lungs, allowing them only a Half Action on their next turn.",
          },
          {
            crit: 2,
            effect:
              "The impact knocks the wind out of the target. They suffer 1 level of Fatigue and are knocked Prone.",
          },
          {
            crit: 3,
            effect:
              "The strike fractures a rib, leaving the target Stunned for 1 round and knocked Prone.",
          },
          {
            crit: 4,
            effect:
              "A powerful blow shatters a rib. The target suffers 1d10 Toughness damage and must pass a Challenging (+0) Agility test or be knocked Prone.",
          },
          {
            crit: 5,
            effect:
              "The blow crushes the target's chest, causing extreme pain. The target is Stunned for 2 rounds and must pass a Challenging (+0) Toughness test or suffer 1d5 levels of Fatigue.",
          },
          {
            crit: 6,
            effect:
              "The impact sends the target sprawling 1d5 meters away, knocking them Prone. The target suffers 1d5 levels of Fatigue and is Stunned for 2 rounds.",
          },
          {
            crit: 7,
            effect:
              "Several ribs are broken with an audible crack. Permanently reduce the target’s Toughness characteristic by 1d5. Without medical attention, each time the target takes an action, roll 1d10. On a 1 or 2, a broken rib punctures a vital organ, killing the target instantly.",
          },
          {
            crit: 8,
            effect:
              "The strike causes massive internal damage, rupturing organs. The target suffers Blood Loss and permanently reduces their Toughness characteristic by 1d10.",
          },
          {
            crit: 9,
            effect:
              "The target collapses as the force of the blow causes catastrophic internal bleeding, resulting in death.",
          },
          {
            crit: 10,
            effect:
              "As above, but the target’s lifeless body is thrown 1d10 meters by the impact. Anyone in its path must pass a Challenging (+0) Agility test or be knocked Prone.",
          },
        ],
      },
    },
    {
      heading: "Impact, Head",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The impact causes a loud ringing in the target’s ears. The target must pass a Challenging (+0) Toughness test or suffer 1 level of Fatigue.",
          },
          {
            crit: 2,
            effect:
              "The blow causes blurred vision and disorientation. The target suffers a –10 penalty to Perception and Intelligence tests for 1d5 rounds.",
          },
          {
            crit: 3,
            effect:
              "A strike to the nose causes intense bleeding, temporarily blinding the target for 1 round. The target must pass a Challenging (+0) Toughness test or be Stunned for 1 round.",
          },
          {
            crit: 4,
            effect:
              "The force of the strike staggers the target. They must pass a Challenging (+0) Toughness test or be Stunned for 1 round and knocked Prone.",
          },
          {
            crit: 5,
            effect:
              "The blow causes severe pain, leaving the target Stunned for 1 round and staggering backwards 1d5 meters. They suffer 1 level of Fatigue and permanently reduce their Intelligence characteristic by 1.",
          },
          {
            crit: 6,
            effect:
              "A heavy strike snaps the target’s head back, causing disorientation. The target is Stunned for 1d5 rounds, knocked back 1d5 meters, and must pass a Challenging (+0) Agility test or fall Prone.",
          },
          {
            crit: 7,
            effect:
              "The impact fractures the target’s skull and leaves a deep laceration. The target is Stunned for 1d10 rounds and has their Movement halved for 1d10 hours.",
          },
          {
            crit: 8,
            effect:
              "A catastrophic blow snaps the target’s neck, resulting in instantaneous death.",
          },
          {
            crit: 9,
            effect:
              "The strike causes the target’s head to rupture, projecting debris outward. Anyone within 4 meters must pass a Challenging (+0) Agility test or suffer a –10 penalty to Weapon Skill and Ballistic Skill tests for 1 round due to obscured vision.",
          },
          {
            crit: 10,
            effect:
              "As above, but the force of the attack passes through the target to another. In melee, the attacker may immediately strike another reachable target. With a ranged weapon, the attacker may target someone directly behind the original target within weapon range.",
          },
        ],
      },
    },
    {
      heading: "Impact, Legs",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "A glancing blow causes sharp pain and bruising. The target suffers 1 level of Fatigue.",
          },
          {
            crit: 2,
            effect:
              "A grazing strike hinders the target’s mobility. The target’s Movement is halved for 1 round. They must pass a Challenging (+0) Toughness test or be Stunned for 1 round and fall Prone.",
          },
          {
            crit: 3,
            effect:
              "A strong impact sends jolts of pain through the leg. The target is knocked Prone and suffers 1d10 Agility damage.",
          },
          {
            crit: 4,
            effect:
              "The force of the blow creates microfractures in the bone. The target is knocked Prone and suffers 2d10 Agility damage.",
          },
          {
            crit: 5,
            effect:
              "The strike fractures the leg bone. The target is Stunned for 1 round, knocked Prone, and their Movement is reduced to 1 meter until they receive medical attention.",
          },
          {
            crit: 6,
            effect:
              "The impact crushes the small bones in the foot. The target suffers 2 levels of Fatigue and their Movement is halved until treated. They must pass a Challenging (+0) Toughness test or suffer the Lost Foot condition.",
          },
          {
            crit: 7,
            effect:
              "The leg is broken, leaving the target incapacitated. They are Stunned for 2 rounds, fall Prone, and the leg is Useless until treated.",
          },
          {
            crit: 8,
            effect:
              "A devastating strike severs the lower leg. The target must pass a Challenging (+0) Toughness test or die from shock. If they survive, they suffer Blood Loss, the Lost Leg condition, and permanently reduce their Agility by 1d5.",
          },
          {
            crit: 9,
            effect:
              "The blow obliterates the leg, causing fatal blood loss. The target collapses and dies almost immediately.",
          },
          {
            crit: 10,
            effect:
              "As above, but the target’s death scream disrupts all communication within 2d10 meters for the rest of the round.",
          },
        ],
      },
    },
    {
      heading: "Impact, Mech",
      table: {
        columns: ["Critical", "Critical Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The impact deforms part of the mech, disabling a random Core System at the Hit Location for 1d5 rounds.",
          },
          {
            crit: 2,
            effect:
              "The mech's armor at the Hit Location is severely compromised, reducing its armor value to 1 until repaired. A random Core System at the Hit Location is disabled for 1d5 rounds.",
          },
          {
            crit: 3,
            effect:
              "The impact disables all Core Systems at the Hit Location for 1d5 rounds.",
          },
          {
            crit: 4,
            effect:
              "The force of the impact knocks the mech prone, causes it to drop anything held, and Stuns the pilot for 1 round.",
          },
          {
            crit: 5,
            effect:
              "The mech's structure collapses at the Hit Location, rendering all Core Systems there unusable until repaired.",
          },
          {
            crit: 6,
            effect:
              "The mech is thrown 5d5 meters by the impact, knocking it prone and Stunning the pilot for 2 rounds.",
          },
          {
            crit: 7,
            effect:
              "The impact destroys all Core Systems at the Hit Location permanently.",
          },
          {
            crit: 8,
            effect:
              "The mech is rendered inoperable. The pilot must pass a +0 Operate test or the mech explodes lethally in 1d5 rounds.",
          },
          {
            crit: 9,
            effect:
              "The mech violently disintegrates, killing the pilot and leaving no recoverable components.",
          },
          {
            crit: 10,
            effect:
              "The mech is destroyed, scattering debris. Targets in its path must pass a +0 Dodge test or take 4d10 Impact damage.",
          },
        ],
      },
    },
  ],
};

export const CRITICAL_DAMAGE_RENDING = {
  title: "Critical Damage (R)",
  sections: [
    {
      heading: "Rending, Arm",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The attack forces the target to drop whatever they were holding in the affected hand.",
          },
          {
            crit: 2,
            effect:
              "Deep cuts weaken the arm, forcing the target to drop their weapon or item. The target suffers 1 level of Fatigue.",
          },
          {
            crit: 3,
            effect:
              "The attack tears into the arm, causing severe pain. The target drops their held item and must pass a Challenging (+0) Toughness test or suffer Blood Loss.",
          },
          {
            crit: 4,
            effect:
              "The strike flays skin and muscle from the arm. The target suffers 2 levels of Fatigue, falls Prone, and the arm is Useless for 1d10 rounds.",
          },
          {
            crit: 5,
            effect:
              "A deep gash renders the arm inoperable. The target suffers Blood Loss, drops any held items, and the arm is Useless until treated.",
          },
          {
            crit: 6,
            effect:
              "The attack mangles the hand, severing 1d5 fingers (a roll of 5 includes the thumb). The target is Stunned for 1 round and must pass a Challenging (+0) Toughness test or suffer the Lost Hand condition.",
          },
          {
            crit: 7,
            effect:
              "The strike devastates the arm, tearing apart muscle and bone. The target suffers Blood Loss, 1d10 Strength damage, and the arm is Useless until treated.",
          },
          {
            crit: 8,
            effect:
              "The arm is severed at the shoulder. The target must pass a Challenging (+0) Toughness test or die from shock. If they survive, they are Stunned for 1d10 rounds, suffer Blood Loss, and gain the Lost Arm condition.",
          },
          {
            crit: 9,
            effect:
              "The attack cuts through the arm and into the torso, killing the target instantly.",
          },
          {
            crit: 10,
            effect:
              "As above, but if the severed arm was holding a ranged weapon, roll 1d100. On a roll of 96 or higher, the weapon discharges, potentially hitting a random target within 2d10 meters.",
          },
        ],
      },
    },
    {
      heading: "Rending, Body",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "A laceration causes the target to suffer 1 level of Fatigue unless wearing sufficient armor.",
          },
          {
            crit: 2,
            effect:
              "A slash creates a painful wound. The target suffers 1 level of Fatigue and must pass a Challenging (+0) Toughness test or be Stunned for 1 round.",
          },
          {
            crit: 3,
            effect:
              "A large portion of skin is torn away, leaving the target gasping. The target is Stunned for 1 round and must pass a Challenging (+0) Toughness test or suffer Blood Loss.",
          },
          {
            crit: 4,
            effect:
              "The attack creates a deep, painful wound. The target is Stunned for 1 round and suffers Blood Loss.",
          },
          {
            crit: 5,
            effect:
              "Deep cuts spill blood onto the ground, creating a slick surface. The target suffers Blood Loss and 1d10 Toughness damage. Any character moving through the blood must pass a Challenging (+0) Agility test or fall Prone.",
          },
          {
            crit: 6,
            effect:
              "A large chunk of flesh is removed, knocking the target to the ground. The target suffers Blood Loss, 1d10 Toughness damage, and falls Prone.",
          },
          {
            crit: 7,
            effect:
              "The attack tears open the abdomen, exposing internal organs. The target suffers Blood Loss and permanently reduces their Toughness by 1d5. Without medical attention, any action taken risks additional damage, with a roll of 1 or 2 on a 1d10 causing 2d10 Rending damage.",
          },
          {
            crit: 8,
            effect:
              "The attack strips the chest of skin and muscle, exposing the inner tissues. The target must pass a Challenging (+0) Toughness test or die. If they survive, they are Stunned for 1 round, suffer Blood Loss, and permanently reduce their Toughness by 1d10.",
          },
          {
            crit: 9,
            effect:
              "A devastating strike cleaves the torso, spilling internal organs and killing the target instantly.",
          },
          {
            crit: 10,
            effect:
              "As above, but the area around the corpse becomes treacherously slick. Any character moving within four meters must pass a Challenging (+0) Agility test or fall Prone.",
          },
        ],
      },
    },
    {
      heading: "Rending, Head",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "A laceration cuts the target’s face, causing sharp pain. If unprotected by a helmet, the target suffers 1 level of Fatigue.",
          },
          {
            crit: 2,
            effect:
              "The attack slices into the scalp, causing profuse bleeding that obscures vision. The target suffers a –10 penalty to Weapon Skill and Ballistic Skill tests for 1d10 rounds and must pass a Challenging (+0) Toughness test or suffer Blood Loss.",
          },
          {
            crit: 3,
            effect:
              "The attack tears into the target’s face. The target is Stunned for 1 round and suffers Blood Loss. If wearing a helmet, it is torn off.",
          },
          {
            crit: 4,
            effect:
              "A deep cut damages one of the target’s eye sockets. The target suffers 1d10 Perception damage and must pass a Routine (+20) Toughness test or suffer the Lost Eye condition.",
          },
          {
            crit: 5,
            effect:
              "The blow dislodges the helmet or, if none is worn, removes an ear. The target is Deafened until treated, Stunned for 1d5 rounds, and must pass a Challenging (+0) Toughness test or have their Fellowship permanently reduced by 1.",
          },
          {
            crit: 6,
            effect:
              "The attack severely damages the face. The target suffers 1d5 levels of Fatigue and Blood Loss. Roll 1d10 to determine the damage: 1–3: Lost Eye; 4–7: Lost Nose (permanently reduce Fellowship by 1d10); 8–10: Lost Ear (Deafened until treated).",
          },
          {
            crit: 7,
            effect:
              "The blow removes most of the face, leaving the target permanently Blinded. The target is Stunned for 1 round, suffers Blood Loss, and permanently reduces their Fellowship by 1d10.",
          },
          {
            crit: 8,
            effect:
              "A devastating strike damages the skull and brain. The target dies instantly.",
          },
          {
            crit: 9,
            effect:
              "The force of the blow decapitates the target, and the head lands 2d10 meters away. The target is instantly killed.",
          },
          {
            crit: 10,
            effect:
              "As above, but the blood spray drenches those within 1d5 meters. Affected characters must pass a Challenging (+0) Agility test or suffer a –10 penalty to Weapon Skill and Ballistic Skill tests for 1 round due to fouled vision.",
          },
        ],
      },
    },
    {
      heading: "Rending, Leg",
      table: {
        columns: ["Damage", "Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "The attack twists the leg painfully, causing the target to suffer 1 level of Fatigue.",
          },
          {
            crit: 2,
            effect:
              "A cut opens the kneecap, causing extreme pain. The target must pass a Challenging (+0) Agility test or fall Prone and suffer Blood Loss.",
          },
          {
            crit: 3,
            effect:
              "A section of flesh is torn from the leg, causing Blood Loss and 1d5 Agility damage.",
          },
          {
            crit: 4,
            effect:
              "The attack rips the kneecap free, causing the target to collapse. They are knocked Prone, suffer 1d10 Agility damage, and their Movement is halved until treated.",
          },
          {
            crit: 5,
            effect:
              "A deep slash exposes bone and muscle. The target suffers Blood Loss and must pass a Challenging (+0) Toughness test or permanently reduce their Agility by 1.",
          },
          {
            crit: 6,
            effect:
              "The attack slices off part of the foot. The target suffers Blood Loss and must pass a Challenging (+0) Toughness test. On success, their Movement is halved until treated; on failure, they suffer the Lost Foot condition.",
          },
          {
            crit: 7,
            effect:
              "A deep cut tears ligaments and fractures bone. The target is Stunned for 1 round, knocked Prone, suffers Blood Loss, and the leg is Useless until treated.",
          },
          {
            crit: 8,
            effect:
              "A powerful slash removes the leg entirely. The target must pass a Challenging (+0) Toughness test or die from shock. If they survive, they are Stunned for 1d10 rounds, suffer Blood Loss, and gain the Lost Leg condition.",
          },
          {
            crit: 9,
            effect:
              "The attack removes the leg at the hip, causing the target to collapse and die from massive blood loss.",
          },
          {
            crit: 10,
            effect:
              "As above, but the blood flow creates a hazard. Any character making a Run or Charge action within 6 meters must pass a Challenging (+0) Agility test or be knocked Prone.",
          },
        ],
      },
    },
    {
      heading: "Rending, Mech",
      table: {
        columns: ["Critical", "Critical Effect"],
        rows: [
          {
            crit: 1,
            effect:
              "A precise attack slices through the mech's armor, reducing the armor value at the Hit Location by 4 until repaired.",
          },
          {
            crit: 2,
            effect:
              "A deep gash compromises the mech's frame, disabling a random Core System at the Hit Location for 1d5 rounds.",
          },
          {
            crit: 3,
            effect:
              "A precision strike disables all Core Systems at the Hit Location for 1d5 rounds.",
          },
          {
            crit: 4,
            effect:
              "The attack tears open the mech's exterior, reducing the armor value at the Hit Location by 8 and causing the mech to gain the Run-down trait.",
          },
          {
            crit: 5,
            effect:
              "The attack slices a critical section of the mech, permanently destroying a random Core System at the Hit Location.",
          },
          {
            crit: 6,
            effect:
              "The attack severs a significant section of the mech, permanently destroying all Core Systems at the Hit Location.",
          },
          {
            crit: 7,
            effect:
              "The attack destabilizes the mech's overall structure. The mech loses 1 armor in all Hit Locations permanently and gains the Derelict trait. The pilot is Stunned for 1d5 rounds.",
          },
          {
            crit: 8,
            effect:
              "The mech's vital systems are devastated. It is completely disabled, and the pilot must pass a +0 Operate test or the mech explodes.",
          },
          {
            crit: 9,
            effect:
              "A powerful strike splits the mech in two, destroying it and killing the pilot. On a roll of 5 on a 1d5, the mech explodes, dealing 5d10 Energy damage to all targets within 15 meters.",
          },
          {
            crit: 10,
            effect:
              "A critical slice guts the mech entirely, destroying both the mech and its pilot in a precise and devastating strike.",
          },
        ],
      },
    },
  ],
};

export const CHARACTER_INFO = {
  title: "Aptitudes & XP Costs",
  sections: [
    {
      heading: "Characteristic Aptitudes",
      table: {
        columns: ["Characteristic", "Aptitude 1", "Aptitude 2"],
        rows: [
          { char: "Weapon Skill", apt1: "Weapon Skill", apt2: "Offense" },
          { char: "Ballistic Skill", apt1: "Ballistic Skill", apt2: "Finesse" },
          { char: "Strength", apt1: "Strength", apt2: "Offense" },
          { char: "Toughness", apt1: "Toughness", apt2: "Defense" },
          { char: "Agility", apt1: "Agility", apt2: "Finesse" },
          { char: "Intelligence", apt1: "Intelligence", apt2: "Knowledge" },
          { char: "Perception", apt1: "Perception", apt2: "Fieldcraft" },
          { char: "Willpower", apt1: "Willpower", apt2: "Defense" },
          { char: "Fellowship", apt1: "Fellowship", apt2: "Social" },
          { char: "Psionics", apt1: "Psychic", apt2: "Willpower" },
        ],
      },
    },
    {
      heading: "Characteristic Costs",
      table: {
        columns: [
          "Num. of Aptitudes",
          "1st Increase",
          "2nd Increase",
          "3rd Increase",
          "4th Increase",
          "5th Increase",
        ],
        rows: [
          {
            numApt: "Two",
            first: "100xp",
            second: "250xp",
            third: "500xp",
            fourth: "750xp",
            fifth: "1250xp",
          },
          {
            numApt: "One",
            first: "250xp",
            second: "500xp",
            third: "750xp",
            fourth: "1,000xp",
            fifth: "1,500xp",
          },
          {
            numApt: "Zero",
            first: "500xp",
            second: "750xp",
            third: "1,000xp",
            fourth: "1,500xp",
            fifth: "2,500xp",
          },
        ],
      },
    },
    {
      heading: "Skill Aptitudes",
      table: {
        columns: ["Skill", "Aptitude 1", "Aptitude 2"],
        rows: [
          { skill: "Acrobatics", apt1: "Agility", apt2: "General" },
          { skill: "Athletics", apt1: "Strength", apt2: "General" },
          { skill: "Awareness", apt1: "Perception", apt2: "Fieldcraft" },
          { skill: "Charm", apt1: "Fellowship", apt2: "Social" },
          { skill: "Command", apt1: "Fellowship", apt2: "Leadership" },
          { skill: "Commerce", apt1: "Intelligence", apt2: "Knowledge" },
          { skill: "Lore", apt1: "Intelligence", apt2: "Knowledge" },
          { skill: "Deceive", apt1: "Fellowship", apt2: "Social" },
          { skill: "Dodge", apt1: "Agility", apt2: "Defense" },
          { skill: "Inquiry", apt1: "Fellowship", apt2: "Social" },
          { skill: "Interrogation", apt1: "Willpower", apt2: "Social" },
          { skill: "Intimidate", apt1: "Strength", apt2: "Social" },
          { skill: "Logic", apt1: "Intelligence", apt2: "Knowledge" },
          { skill: "Medical", apt1: "Intelligence", apt2: "Fieldcraft" },
          { skill: "Navigate", apt1: "Intelligence", apt2: "Fieldcraft" },
          { skill: "Operate", apt1: "Agility", apt2: "Fieldcraft" },
          { skill: "Parry", apt1: "Weapons Skill", apt2: "Defense" },
          { skill: "Scrutiny", apt1: "Perception", apt2: "General" },
          { skill: "Sense", apt1: "Perception", apt2: "Psychic" },
          { skill: "Sleight of Hand", apt1: "Agility", apt2: "Knowledge" },
          { skill: "Stealth", apt1: "Agility", apt2: "Fieldcraft" },
          { skill: "Survival", apt1: "Perception", apt2: "Fieldcraft" },
          { skill: "Hardware", apt1: "Intelligence", apt2: "Tech" },
          { skill: "Software", apt1: "Intelligence", apt2: "Tech" },
          { skill: "Trade", apt1: "Intelligence", apt2: "General" },
        ],
      },
    },
    {
      heading: "Skill Advances",
      table: {
        columns: [
          "Number of Aptitudes",
          "Rank 1 (+0)",
          "Rank 2 (+10)",
          "Rank 3 (+20)",
          "Rank 4 (+30)",
        ],
        rows: [
          {
            numApt: "Two",
            rank1: "100xp",
            rank2: "200xp",
            rank3: "300xp",
            rank4: "400xp",
          },
          {
            numApt: "One",
            rank1: "200xp",
            rank2: "400xp",
            rank3: "600xp",
            rank4: "800xp",
          },
          {
            numApt: "Zero",
            rank1: "300xp",
            rank2: "600xp",
            rank3: "900xp",
            rank4: "1200xp",
          },
        ],
      },
    },
    {
      heading: "Talent Advances",
      table: {
        columns: ["Number of Aptitudes", "Tier 1", "Tier 2", "Tier 3"],
        rows: [
          { numApt: "Two", tier1: "200xp", tier2: "300xp", tier3: "400xp" },
          { numApt: "One", tier1: "300xp", tier2: "450xp", tier3: "600xp" },
          { numApt: "Zero", tier1: "600xp", tier2: "900xp", tier3: "1200xp" },
        ],
      },
    },
  ],
};

export const STRESS_INFO = {
  title: "Stress",
  sections: [
    {
      heading: "Stress Abilities",
      table: {
        columns: ["Cost", "Action"],
        rows: [
          {
            Cost: "10",
            Action: "Cheat death (permanently reduces stress threshold)",
          },
          { Cost: "10", Action: "Reroll a failed test" },
          { Cost: "5", Action: "Add +10 to a test before rolling" },
          { Cost: "4", Action: "Add a degree of success to a roll" },
          { Cost: "8", Action: "Automatically roll a 10 on initiative" },
          { Cost: "10", Action: "Reduce the result of critical damage by 1d5" },
          { Cost: "5", Action: "Remove 1 round of being Stunned" },
          { Cost: "5", Action: "Remove 1 level of fatigue" },
          { Cost: "10", Action: "Ignore fatigue for an hour" },
        ],
      },
    },
  ],
};

export const GEAR_INFO = {
  title: "Gear",
  sections: [
    {
      heading: "Availability",
      table: {
        columns: ["Availability", "Requisition Modifier"],
        rows: [
          { Availability: "Ubiquitous", "Requisition Modifier": "Automatic" },
          { Availability: "Abundant", "Requisition Modifier": "+30" },
          { Availability: "Plentiful", "Requisition Modifier": "+20" },
          { Availability: "Common", "Requisition Modifier": "+10" },
          { Availability: "Average", "Requisition Modifier": "+0" },
          { Availability: "Scarce", "Requisition Modifier": "-10" },
          { Availability: "Rare", "Requisition Modifier": "-20" },
          { Availability: "Very Rare", "Requisition Modifier": "-30" },
          { Availability: "Extremely Rare", "Requisition Modifier": "-40" },
          { Availability: "Near Unique", "Requisition Modifier": "-50" },
        ],
      },
    },
    {
      heading: "Weapon Classes",
      table: {
        columns: ["Class", "Effect"],
        rows: [
          {
            Class: "Melee",
            Effect:
              "These weapons can be used in close combat. When using a Melee weapon, the wielder adds their Strength bonus to the damage inflicted.",
          },
          {
            Class: "Ranged",
            Effect:
              "These weapons may be fired from a distance. They suffer a -20 penalty to hit when used to fire into close combat.",
          },
          {
            Class: "Thrown",
            Effect:
              "These weapons may be thrown. Strength bonus is added to damage inflicted, with the exception of explosives.",
          },
          {
            Class: "Light",
            Effect:
              "These weapons are used one-handed and can be used in close combat. Light ranged weapons gain no bonuses or penalties from firing in close range combat.",
          },
          {
            Class: "Basic",
            Effect:
              "These weapons normally require two hands, but can be used one-handed with a –20 penalty to hit.",
          },
          {
            Class: "Heavy",
            Effect:
              "These weapons always require two hands. For Heavy ranged weapons, they must be braced in some way, usually either on a bipod or tripod, to be fired without penalty. Firing a Heavy ranged weapon without bracing incurs a -30 penalty to hit and prohibits Semi-Auto and Full Auto Burst actions.",
          },
        ],
      },
    },
  ],
};

export const EXTRA_CHARACTER_INFO = {
  test: [
    {
      heading: "Overview",
      content:
        "Each Starlight character is represented by a number of aspects displayed on their Character Sheet, including Characteristics, Skills, Stress, Cybernetics, Talents and Traits, Aptitudes, Elite Advances, and Experience Points (XP). For a comprehensive explanation of basic game mechanics, see the Dark Heresy Core Rulebook; some abbreviated explanations are provided below.",
    },
    {
      heading: "Experience Points",
      content:
        "Characters receive experience points at the GM’s discretion after sessions of play, and are spent by the player to increase their character’s Characteristics, Skills, or to invest in Talents or Elite Advances.",
    },
    {
      heading: "Character Creation",
      content:
        "Characters are created via a series of decisions about their circumstances and personality. The current process for Starlight character creation is available here.",
    },
    {
      heading: "Aptitudes",
      content:
        "Aptitudes are gained during character creation, and determine the experience point costs for increasing Characteristics or Skills, or investing in Talents.",
    },
    {
      heading: "Characteristics",
      content:
        "Characteristics are representative of a character’s fundamental disposition. They include the character’s Weapon Skill (WS), Ballistic Skill (BS), Strength (S), Toughness (T), Agility (Ag), Intelligence (Int), Perception (Per), Willpower (WP), Fellowship (Fel), and Psionic Skill (Psi). The Aptitudes for each Characteristic can be found on Table 1a. The XP cost of increasing a Characteristic can be found on Table 1b.",
    },
    {
      heading: "Skills",
      content:
        "Skills are representative of a character’s specific skills. Each Skill has an associated characteristic, and a designated level of proficiency. The Aptitudes for each Skill can be found on Table 1c. The XP cost of increasing a Characteristic can be found on Table 1d.",
    },
    {
      heading: "Talents",
      content:
        "Talents are representative of a character’s learned special abilities. Each Talent has an associated set of Aptitudes. The Aptitudes for each Talent based on the character’s number of matching Aptitudes can be found on Table 1e. The full Talent list can be seen in the 'Talents List' section of the rulebook.",
    },
    {
      heading: "Stress",
      content:
        "A character’s level of stress represents their level of mental fatigue. Stress may be given to characters by the GM. Players may additionally opt to take stress to perform a number of actions as seen on Table 2a. A character’s stress threshold is equal to 10 times their Willpower bonus. A full night of sleep removes 1d10 stress. A wakeful day of downtime removes approximately 1d10 stress. Indulging in a character’s vices can additionally reduce stress at the GM’s discretion. If a character pushes above their stress threshold (for example, 31/30), they immediately suffer a -10 to all rolls. They gain an additional -10 to all rolls for each 10 Stress taken above that character’s threshold (for example, 41/30 would net a -20). If a character reaches double their stress threshold, they die.",
    },
  ],
};

export const TRAIT_INFO = {
  title: "Traits",
  sections: [
    {
      heading: "Weapon Traits",
      table: {
        columns: ["Trait", "Effect"],
        rows: [
          {
            Trait: "Accurate",
            Effect:
              "Grants +10 Bonus to hit if used with Aim, Basic weapons add +1d10 damage per two extra DoS (max +2d10) when firing a single shot.",
          },
          {
            Trait: "Balanced",
            Effect: "+10 to Weapon Skill tests made to Parry.",
          },
          {
            Trait: "Blast (X)",
            Effect:
              "All within the weapon's blast radius in meters are hit. Roll damage individually for each character affected.",
          },
          {
            Trait: "Concussive (X)",
            Effect:
              "On hit, the target must make a Toughness test (Operate test if piloting a mech) with a penalty equal to 10*(X). On failure, the target is stunned for one round per degree of failure.",
          },
          {
            Trait: "Corrosive",
            Effect:
              "When hit, armor points in the hit location are reduced by 1d10 points. Any excess damage is dealt to the target. +0 Hardware test to repair.",
          },
          {
            Trait: "Compact",
            Effect: "-20 to tests made to find this weapon.",
          },
          {
            Trait: "Crippling (X)",
            Effect:
              "When wounded, the target is Crippled. Taking more than a half action on a turn results in immediate X damage not reduced by armor or toughness.",
          },
          {
            Trait: "Defensive",
            Effect:
              "Grants +15 bonus to Parry and -10 penalty to hit when using this weapon.",
          },
          {
            Trait: "Felling (X)",
            Effect:
              "When calculating damage, reduce the target's Unnatural Toughness bonus by X.",
          },
          {
            Trait: "Flame",
            Effect:
              "Target must make a +0 Agility test or be set on fire, even if they take no damage from the attack. Fire causes 1d10 E damage and 1 Fatigue each round until extinguished.",
          },
          { Trait: "Flexible", Effect: "Cannot be parried." },
          {
            Trait: "Nethari",
            Effect:
              "Weapon deals bonus energy damage and penetration equal to the user’s Psi Rating. May deal additional 1d10 Energy damage per DoS, ignoring armor and toughness bonus.",
          },
          {
            Trait: "Hallucinogenic (X)",
            Effect:
              "Target must make a Toughness test with a penalty of 10*(X). On failure, roll 1d10 on the Hallucinogenic Effects table. Effect lasts for 1 round plus 1 per DoF.",
          },
          {
            Trait: "EMP (X)",
            Effect:
              "Weapon generates an electromagnetic pulse field with radius (X) where unshielded technology ceases to function for 1d5 rounds. Mechs affected lose (X) Core Systems.",
          },
          { Trait: "Inaccurate", Effect: "No benefit from the aim action." },
          {
            Trait: "Maximal",
            Effect:
              "Switch to Maximal fire mode as a free action. Adds range, damage, and penetration but consumes 3x ammo and gains Recharge quality.",
          },
          {
            Trait: "Overheats",
            Effect:
              "On a roll of 91 or higher, the wielder takes Energy damage equivalent to the weapon's damage. Weapon may not be fired next round as it cools.",
          },
          {
            Trait: "Takedown",
            Effect:
              "On a hit with damage, the opponent must make a +0 Toughness test or be Stunned for 1 round and knocked prone.",
          },
          {
            Trait: "Power Field",
            Effect:
              "On a successful Parry, roll 1d100. On a result of 26+, the opposing weapon is destroyed.",
          },
          {
            Trait: "Proven (X)",
            Effect:
              "Weapon's damage dice never count as rolling lower than (X).",
          },
          {
            Trait: "Razor Sharp",
            Effect:
              "On a successful hit with 3+ DoS, the penetration is doubled for that attack.",
          },
          {
            Trait: "Recharge",
            Effect:
              "Attack cannot be used again until the end of the next round.",
          },
          { Trait: "Reliable", Effect: "Weapon only jams on a 100 die roll." },
          {
            Trait: "Scatter",
            Effect:
              "At Point Blank, weapon gains +10 to hit and +3 to damage. At longer ranges, suffers -3 damage.",
          },
          {
            Trait: "Shocking (X)",
            Effect:
              "On hit, target must make a +0 Toughness test. Failure causes Fatigue and Stun for (X) rounds. Disables mech Core Systems for (X) rounds.",
          },
          {
            Trait: "Shield (X)",
            Effect:
              "Grants (X) AP to the body and arm on which the shield is held.",
          },
          {
            Trait: "Smoke (X)",
            Effect:
              "Creates smoke cloud with radius (X) meters lasting 1d10+10 rounds.",
          },
          {
            Trait: "Snare (X)",
            Effect:
              "Hit target must pass an Agility test with penalty (10*X) or be Immobilized. Immobilized targets can only escape with tests against same penalty.",
          },
          {
            Trait: "Spray",
            Effect:
              "Weapon projects a 30-degree cone. All creatures in path must make an Agility test or be struck.",
          },
          {
            Trait: "Storm",
            Effect: "Doubles number of hits inflicted and ammo expended.",
          },
          {
            Trait: "Tearing",
            Effect: "Roll one extra die for damage, discard the lowest die.",
          },
          {
            Trait: "Toxic (X)",
            Effect:
              "Targets hit must pass a Toughness test with penalty (10*X) or take additional damage. Ineffective against mechs.",
          },
          {
            Trait: "Unbalanced",
            Effect: "Cannot use lightning attack. -10 to Parry.",
          },
          {
            Trait: "Unreliable",
            Effect: "Weapon jams on a roll of 91 or higher.",
          },
          {
            Trait: "Unwieldy",
            Effect: "Cannot be used to parry or make lightning attacks.",
          },
          {
            Trait: "Vengeful",
            Effect: "Inflicts a critical hit on damage rolls of X or higher.",
          },
          {
            Trait: "Non-Lethal",
            Effect:
              "This weapon does not kill when the target hits zero wounds, all damage beyond 0 wounds is delivered in fatigue gained as opposed to critical damage.",
          },
        ],
      },
    },
    {
      heading: "Armor Traits",
      table: {
        columns: ["Trait", "Effect"],
        rows: [
          {
            Trait: "Oxygen (X)",
            Effect: "Armor has breathable oxygen supply for X hours.",
          },
          {
            Trait: "Self-Sealing",
            Effect:
              "Automatically repairs damage that would cause depressurization.",
          },
          { Trait: "EMP Shield", Effect: "Immune to EMP effects." },
          {
            Trait: "RCS Controls",
            Effect: "Allows free movement up to half speed in zero gravity.",
          },
          {
            Trait: "Thermal Sight",
            Effect: "Negates penalties to sight from smoke or darkness.",
          },
          {
            Trait: "Air Filtration",
            Effect: "Immune to gas-based or air hazard attacks.",
          },
          {
            Trait: "Autodoctor",
            Effect:
              "Onboard AI keeps wearer alive with drugs. Always treated as Lightly Damaged for healing purposes.",
          },
        ],
      },
    },
    {
      heading: "Character and Mech Traits",
      table: {
        columns: ["Trait", "Effect"],
        rows: [
          {
            Trait: "Baschet-Stratis Carrier",
            Effect: "Gain Psychic aptitude and Sense skill.",
          },
          {
            Trait: "Baschet-Stratis Host",
            Effect: "Allows purchase of Baschet-Stratis Psionic Abilities.",
          },
          {
            Trait: "Derelict",
            Effect: "Attacks on this mech gain Vengeful (8).",
          },
          {
            Trait: "Dual-Piloting System",
            Effect: "Two pilots can share three Half Actions per turn.",
          },
          { Trait: "EMP Shielded", Effect: "Unaffected by EMP weapon trait." },
          {
            Trait: "Fear (X)",
            Effect:
              "Opponents must pass Willpower test against Fear rating or suffer Shock effects.",
          },
          {
            Trait: "Maneuverable",
            Effect: "Grants an extra Dodge or Parry attempt per round.",
          },
          {
            Trait: "Reinforced Servos (X)",
            Effect: "Weapon slots at (X) location can mount heavier weapons.",
          },
          {
            Trait: "Run-down",
            Effect: "Attacks on this mech gain Vengeful (9).",
          },
          {
            Trait: "Self-Destruct System",
            Effect:
              "Pilot may initiate a self-destruct sequence as a Half Action.",
          },
          {
            Trait: "Siliconian",
            Effect: "Cannot gain Baschet-Stratis Carrier or Host traits.",
          },
          {
            Trait: "Size (X)",
            Effect:
              "Determines creature size and associated benefits or penalties.",
          },
          {
            Trait: "Sturdy",
            Effect:
              "Grants +20 bonus to resist Grapple, Knock Down, and Takedown.",
          },
          {
            Trait: "Swarm",
            Effect:
              "Cannot be killed by single-shot ranged or melee attacks. Can climb onto opponents during melee.",
          },
          {
            Trait: "Unnatural Characteristic (X)",
            Effect: "Increases one Characteristic bonus by X.",
          },
        ],
      },
    },
  ],
};

export const TALENT_INFO = {
  title: "Talents",
  sections: [
    {
      heading: "Tier 1 Talents",
      table: {
        columns: ["Talent", "Prerequisites", "Aptitudes", "Benefit"],
        rows: [
          {
            Talent: "Ambidextrous",
            Prerequisites: "AG 30",
            Aptitudes: "Weapon Skill, Ballistic Skill",
            Benefit:
              "When combined with Two-Weapon Wielder, reduces penalty for attacking with both weapons to -10.",
          },
          {
            Talent: "Blind Fighting",
            Prerequisites: "PER 30",
            Aptitudes: "Perception, Fieldcraft",
            Benefit: "No vision penalties to Weapon Skill tests.",
          },
          {
            Talent: "Bodyguard",
            Prerequisites: "AG 35",
            Aptitudes: "Agility, Defense",
            Benefit:
              "Interpose between ally and attacker as a Reaction, redirecting the attack.",
          },
          {
            Talent: "Catfall",
            Prerequisites: "AG 30",
            Aptitudes: "Agility, Fieldcraft",
            Benefit:
              "Reduce effective fall distance by AgB meters; +20 to Agility tests to avoid fall damage.",
          },
          {
            Talent: "Clues from the Crowds",
            Prerequisites: "FEL 30",
            Aptitudes: "General, Social",
            Benefit:
              "Once per day, re-roll a test to gather information from people.",
          },
          {
            Talent: "Die Hard",
            Prerequisites: "WP 40",
            Aptitudes: "Willpower, Defense",
            Benefit:
              "Make a +0 Willpower test to avoid Fatigue from Blood Loss.",
          },
          {
            Talent: "Disarm",
            Prerequisites: "AG 30",
            Aptitudes: "Weapon Skill, Defense",
            Benefit:
              "Full Action to make an opposed Weapon Skill test to disarm a melee target.",
          },
          {
            Talent: "Double Team",
            Prerequisites: "-",
            Aptitudes: "General, Offense",
            Benefit:
              "+10 bonus to Weapon Skill tests when Ganging Up on an opponent.",
          },
          {
            Talent: "Enemy",
            Prerequisites: "-",
            Aptitudes: "General, Social",
            Benefit: "-10 penalty to Fellowship tests with a specific group.",
          },
          {
            Talent: "Grenadier",
            Prerequisites: "BS 35",
            Aptitudes: "Ballistic Skill, Finesse",
            Benefit:
              "Reduce scatter distance of missed Blast weapons by half BS bonus meters.",
          },
          {
            Talent: "Iron Jaw",
            Prerequisites: "T 40",
            Aptitudes: "Toughness, Defense",
            Benefit:
              "Make a +0 Toughness test to ignore effects of being Stunned.",
          },
          {
            Talent: "Jaded",
            Prerequisites: "WP 40",
            Aptitudes: "Willpower, Defense",
            Benefit: "Immune to mundane horrors causing Fear tests.",
          },
          {
            Talent: "Keen Intuition",
            Prerequisites: "INT 35",
            Aptitudes: "Perception, Social",
            Benefit: "Re-roll failed Awareness tests at -10.",
          },
          {
            Talent: "Leap Up",
            Prerequisites: "AG 30",
            Aptitudes: "Agility, General",
            Benefit: "Stand from prone as a Free Action.",
          },
          {
            Talent: "Leaping Dodge",
            Prerequisites: "AG 35, +10 Dodge",
            Aptitudes: "Agility, Defense",
            Benefit: "Use Dodge skill to avoid attacks from Spray weapons.",
          },
          {
            Talent: "Nowhere to Hide",
            Prerequisites: "PER 30",
            Aptitudes: "Perception, Offense",
            Benefit: "Add DoS from an attack to reduce cover’s Armor value.",
          },
          {
            Talent: "Peer",
            Prerequisites: "FEL 30",
            Aptitudes: "Fellowship, Social",
            Benefit: "+10 bonus to Fellowship tests with a specific group.",
          },
          {
            Talent: "Precision Killer",
            Prerequisites: "BS 35 or WS 35",
            Aptitudes: "Ballistic Skill/Weapon Skill, Finesse",
            Benefit: "No penalty for Called Shots in combat.",
          },
          {
            Talent: "Psionic Sense",
            Prerequisites: "Rank 1 Sense, PER 30",
            Aptitudes: "Perception, Psychic",
            Benefit:
              "Use the Sense skill as a free action to detect psychic effects.",
          },
          {
            Talent: "Quick Draw",
            Prerequisites: "-",
            Aptitudes: "Agility, Finesse",
            Benefit: "Draw and ready Light or Basic weapons as a Free Action.",
          },
          {
            Talent: "Rapid Reload",
            Prerequisites: "-",
            Aptitudes: "Agility, Fieldcraft",
            Benefit: "Halve reload times, rounding down.",
          },
          {
            Talent: "Resistance",
            Prerequisites: "-",
            Aptitudes: "Toughness, Defense",
            Benefit:
              "+10 to tests to resist specific effects (e.g., heat, poison).",
          },
          {
            Talent: "Sound Constitution",
            Prerequisites: "-",
            Aptitudes: "Toughness, General",
            Benefit:
              "Gain one additional Wound; may be taken 2x Toughness bonus times.",
          },
          {
            Talent: "Takedown",
            Prerequisites: "-",
            Aptitudes: "Weapon Skill, Offense",
            Benefit:
              "Special attack to Stun and knock prone a target on hit with damage.",
          },
          {
            Talent: "Technical Knock",
            Prerequisites: "INT 30",
            Aptitudes: "Intelligence, Tech",
            Benefit: "Unjam guns as a Half Action instead of Full Action.",
          },
          {
            Talent: "Vehicle Combat Training",
            Prerequisites: "Rank 1 Operate (any)",
            Aptitudes: "Agility, Fieldcraft",
            Benefit:
              "Use Operate skill for evasion reactions in vehicles or mechs.",
          },
          {
            Talent: "Weapon-Tech",
            Prerequisites: "Hardware +10, INT 40",
            Aptitudes: "Intelligence, Tech",
            Benefit:
              "Enhance certain weapons’ damage and penetration by INT bonus for one round.",
          },
        ],
      },
    },
    {
      heading: "Tier 2 Talents",
      table: {
        columns: ["Talent", "Prerequisites", "Aptitudes", "Benefit"],
        rows: [
          {
            Talent: "Armor-Monger",
            Prerequisites: "INT 35, Hardware",
            Aptitudes: "Intelligence, Tech",
            Benefit:
              "Gain extra armor points equal to INT bonus, distributed at will.",
          },
          {
            Talent: "Antipsychotic Training",
            Prerequisites: "WP 35",
            Aptitudes: "Willpower, Defense",
            Benefit:
              "May use Willpower characteristic when making an evasion reaction against ranged or melee psionic attacks.",
          },
          {
            Talent: "Bulging Biceps",
            Prerequisites: "S 45",
            Aptitudes: "Strength, Offense",
            Benefit:
              "Remove bracing requirement from Heavy weapons, +20 to Athletics skill test for lifting or pulling.",
          },
          {
            Talent: "Combat Master",
            Prerequisites: "WS 30",
            Aptitudes: "Weapon Skill, Defense",
            Benefit: "Opponents get no bonus for outnumbering the character.",
          },
          {
            Talent: "Constant Vigilance",
            Prerequisites: "INT 35 or PER 35, Awareness +10",
            Aptitudes: "Perception, Defense",
            Benefit:
              "Use PER or INT instead of AG for Initiative rolls, and rolls two dice (picking higher) for the result.",
          },
          {
            Talent: "Contact Network",
            Prerequisites: "INT 35, FEL 30",
            Aptitudes: "Fellowship, Leadership",
            Benefit:
              "May use Charm or Command instead of Commerce for requisition tests.",
          },
          {
            Talent: "Coordinated Interrogation",
            Prerequisites:
              "S 40 or WP 40, Clues from the Crowds, Interrogation",
            Aptitudes: "Intelligence, Social",
            Benefit:
              "+10 to interrogation tests, additional +10 per ally with this talent.",
          },
          {
            Talent: "Counter Attack",
            Prerequisites: "WS 40",
            Aptitudes: "Weapon Skill, Defense",
            Benefit:
              "Make a Standard Attack after a successful Parry, with a -20 Weapon Skill penalty.",
          },
          {
            Talent: "Devastating Assault",
            Prerequisites: "WS 35",
            Aptitudes: "Weapon Skill, Offense",
            Benefit:
              "On a successful All Out Attack, may make a second All Out Attack as a free action with the same bonuses and penalties.",
          },
          {
            Talent: "Double Tap",
            Prerequisites: "Two-Weapon Wielder",
            Aptitudes: "Finesse, Offense",
            Benefit:
              "Gain +20 to second ranged attack against the same target if the first attack scores one or more hits.",
          },
          {
            Talent: "Face in a Crowd",
            Prerequisites: "FEL 45, Clues from the Crowds",
            Aptitudes: "Fellowship, Social",
            Benefit:
              "Use Fellowship instead of Agility when trailing targets or hiding amongst people.",
          },
          {
            Talent: "Field Vivisection",
            Prerequisites: "BS or WS 40, +10 Medical skill",
            Aptitudes: "Ballistic Skill/Weapon Skill, Knowledge",
            Benefit:
              "Use Medical skill instead of WS/BS for Called Shot attacks against targets with appropriate Lore knowledge.",
          },
          {
            Talent: "Hard Target",
            Prerequisites: "AG 40",
            Aptitudes: "Agility, Defense",
            Benefit:
              "Enemies suffer -20 to hit the character when they Charge or Run.",
          },
          {
            Talent: "Hardy",
            Prerequisites: "T 40",
            Aptitudes: "Toughness, Defense",
            Benefit: "Character always heals as if Lightly Damaged.",
          },
          {
            Talent: "Hatred",
            Prerequisites: "-",
            Aptitudes: "Weapon Skill, Social",
            Benefit:
              "+10 bonus when attacking hated targets; must pass a +0 Willpower test to retreat or surrender.",
          },
          {
            Talent: "Hip Shooting",
            Prerequisites: "BS 40, AG 40",
            Aptitudes: "Ballistic Skill, Finesse",
            Benefit:
              "As a Full Action, take a Full Move and make a single shot attack with a ranged weapon. Two-Weapon Wielder allows two single shots.",
          },
          {
            Talent: "Hotshot Pilot",
            Prerequisites: "Rank 2 in any Operate, AG 35",
            Aptitudes: "Agility, Tech",
            Benefit:
              "On successful Operate test, take 1 Fatigue to add half AG bonus DoS. On failed test, take 1 Fatigue to reduce DoF by AG bonus.",
          },
          {
            Talent: "Independent Targeting",
            Prerequisites: "BS 40",
            Aptitudes: "Ballistic Skill, Finesse",
            Benefit:
              "Fire at multiple targets more than 10 meters apart when using two weapons.",
          },
          {
            Talent: "Inescapable Attack",
            Prerequisites: "BS 40 or WS 40, PER 35",
            Aptitudes: "Weapon Skill/Ballistic Skill, Finesse",
            Benefit:
              "Impose 10*DoS penalty to evasion attempts against a designated attack once per round.",
          },
          {
            Talent: "Inspiring Aura",
            Prerequisites: "FEL 40",
            Aptitudes: "Leadership, Willpower",
            Benefit:
              "Use Fellowship to contest Fear checks. Allies within 10m gain +20 against Fear tests.",
          },
          {
            Talent: "Iron Resolve",
            Prerequisites: "Resistance (Fear), Jaded",
            Aptitudes: "Defense, Willpower",
            Benefit: "Re-roll failed Fear or Pinning tests with -10.",
          },
          {
            Talent: "Killing Strike",
            Prerequisites: "WS 50",
            Aptitudes: "Weapon Skill, Offense",
            Benefit:
              "Spend 10 Stress to make melee attacks unavoidable via Dodge or Parry for one turn.",
          },
          {
            Talent: "Loremaster",
            Prerequisites: "INT 40",
            Aptitudes: "Knowledge, Social",
            Benefit: "Re-roll failed Lore tests once, at a -10 penalty.",
          },
          {
            Talent: "Marksman",
            Prerequisites: "BS 35",
            Aptitudes: "Ballistic Skill, Finesse",
            Benefit: "No penalties for firing at long or extreme range.",
          },
          {
            Talent: "One-on-One",
            Prerequisites: "WS 40",
            Aptitudes: "Finesse, Weapon Skill",
            Benefit:
              "Gain extra DoS on WS tests when fighting a single enemy in melee, equal to half WS bonus.",
          },
          {
            Talent: "Pure Hatred",
            Prerequisites: "Hatred",
            Aptitudes: "Offense, Willpower",
            Benefit:
              "Gain Vengeful (9) quality against opponents of the Hatred group.",
          },
          {
            Talent: "Strong Minded",
            Prerequisites: "WP 30, Resistance (Psionics)",
            Aptitudes: "Willpower, Defense",
            Benefit:
              "Re-roll failed Willpower tests to resist psionic abilities.",
          },
          {
            Talent: "Swift Attack",
            Prerequisites: "WS 30",
            Aptitudes: "Weapon Skill, Finesse",
            Benefit:
              "Make multiple melee attacks as per Swift Attack combat action.",
          },
          {
            Talent: "Two-Weapon Wielder",
            Prerequisites: "-",
            Aptitudes: "Weapon Skill/Ballistic Skill, Finesse",
            Benefit:
              "Attack with two weapons in either melee or ranged combat as part of the same Half Action; both attacks suffer -20.",
          },
          {
            Talent: "Unarmed Specialist",
            Prerequisites: "Ambidextrous, AG 35, WS 35",
            Aptitudes: "Strength, Offense",
            Benefit:
              "Unarmed attacks hit as Deadly Natural Weapons; reroll damage.",
          },
          {
            Talent: "Psi-Daredevil",
            Prerequisites: "Strong Minded, PSI 50",
            Aptitudes: "Willpower, Psychic",
            Benefit:
              "When pushing, add 1d5 to psi rating but suffer +30 on psychic phenomenon rolls.",
          },
          {
            Talent: "Whirlwind of Death",
            Prerequisites: "WS 40",
            Aptitudes: "Weapon Skill, Finesse",
            Benefit:
              "As a Half Action, make a melee attack against each character engaged in melee (up to WS bonus).",
          },
          {
            Talent: "Psi-Hunter",
            Prerequisites: "WP 40",
            Aptitudes: "Knowledge, Perception",
            Benefit: "Gain Sense skill even without psionic abilities.",
          },
        ],
      },
    },
    {
      heading: "Tier 3 Talents",
      table: {
        columns: ["Talent", "Prerequisites", "Aptitudes", "Benefit"],
        rows: [
          {
            Talent: "Absolute Resolve",
            Prerequisites: "Jaded, Resistance (Fear), WP 45",
            Aptitudes: "Willpower, Defense",
            Benefit:
              "Subtract WP bonus from DoF on a failed Fear or Pinning test. If reduced to zero or less, count as passing with 1 DoS.",
          },
          {
            Talent: "Assassin Strike",
            Prerequisites: "AG 40, Acrobatics",
            Aptitudes: "Weapon Skill, Fieldcraft",
            Benefit:
              "After a melee attack, make a +0 Acrobatics test to Half Move as a free action without provoking free attacks.",
          },
          {
            Talent: "Iron Will",
            Prerequisites: "Psi rating, Strong Minded, PSI 40",
            Aptitudes: "Willpower, Psychic",
            Benefit:
              "Add 5x psi rating to any opposed test when defending against psionic abilities.",
          },
          {
            Talent: "Blademaster",
            Prerequisites: "WS 30",
            Aptitudes: "Weapon Skill, Finesse",
            Benefit: "Re-roll one missed bladed weapon attack per round.",
          },
          {
            Talent: "Crushing Blow",
            Prerequisites: "WS 40",
            Aptitudes: "Weapon Skill, Offense",
            Benefit: "Add half WS bonus (rounded up) to melee damage.",
          },
          {
            Talent: "Deathdealer",
            Prerequisites: "BS 45 or WS 45",
            Aptitudes: "Perception, Finesse",
            Benefit:
              "Critical damage attacks deal extra damage equal to Perception bonus.",
          },
          {
            Talent: "Spray Specialist",
            Prerequisites: "BS 45, WP 35",
            Aptitudes: "General, Finesse",
            Benefit: "Attacks with the Spray quality only affect enemies.",
          },
          {
            Talent: "Eye of Vengeance",
            Prerequisites: "BS 50",
            Aptitudes: "Ballistic Skill, Offense",
            Benefit:
              "On successful ranged attack, spend 8 Stress to add DoS to damage and penetration.",
          },
          {
            Talent: "Flash of Insight",
            Prerequisites: "INT 40",
            Aptitudes: "Perception, Knowledge",
            Benefit:
              "Spend 10 Stress to reveal a clue in an ongoing investigation.",
          },
          {
            Talent: "Halo of Command",
            Prerequisites: "FEL 40, WP 40",
            Aptitudes: "Fellowship, Leadership",
            Benefit:
              "Social skills affect characters within 100 x Fellowship bonus meters.",
          },
          {
            Talent: "Hammer Blow",
            Prerequisites: "Crushing Blow",
            Aptitudes: "Strength, Offense",
            Benefit:
              "All Out Attack adds half Strength bonus to weapon pen and gains Concussive(2).",
          },
          {
            Talent: "Infused Knowledge",
            Prerequisites: "INT 40",
            Aptitudes: "Intelligence, Knowledge",
            Benefit: "All Lore tests count as known.",
          },
          {
            Talent: "Into the Jaws of Hell",
            Prerequisites: "Absolute Resolve, Halo of Command",
            Aptitudes: "Leadership, Willpower",
            Benefit:
              "Subtract FEL bonus from DoF on failed Fear or Pinning tests. Zero or less counts as passing with 1 DoS.",
          },
          {
            Talent: "Lightning Attack",
            Prerequisites: "Swift Attack",
            Aptitudes: "Weapon Skill, Finesse",
            Benefit:
              "Make many melee attacks with a single roll (see Lightning Attack combat action).",
          },
          {
            Talent: "Mastery",
            Prerequisites: "+30 in selected skill",
            Aptitudes: "Both skill Aptitudes",
            Benefit:
              "Spend 10 Stress to automatically succeed at +0 test with DoS equal to characteristic bonus.",
          },
          {
            Talent: "Mighty Shot",
            Prerequisites: "BS 40",
            Aptitudes: "Ballistic Skill, Offense",
            Benefit: "Add half BS bonus (rounded up) to ranged damage rolls.",
          },
          {
            Talent: "Never Die",
            Prerequisites: "WP 50, T 50",
            Aptitudes: "Toughness, Defense",
            Benefit:
              "Spend 10 Stress to ignore injury, fatigue, and critical damage for an encounter unless death is immediate.",
          },
          {
            Talent: "Preternatural Speed",
            Prerequisites: "WS 40, AG 50",
            Aptitudes: "Agility, Offense",
            Benefit: "Double speed when charging.",
          },
          {
            Talent: "Push the Limit",
            Prerequisites: "+10 in Operate, Hardware",
            Aptitudes: "Perception, Tech",
            Benefit:
              "Add +20 to an Operate test once per round. On 4+ DoF, take 1d5 critical damage to vehicle.",
          },
          {
            Talent: "Psi-Controller",
            Prerequisites: "PSI 35",
            Aptitudes: "Willpower, Psychic",
            Benefit:
              "Roll twice on psychic phenomena table and select preferred result.",
          },
          {
            Talent: "Psi-Lock",
            Prerequisites: "Psi rating, Strong Minded, PSI 50",
            Aptitudes: "Willpower, Psychic",
            Benefit:
              "Ignore psychic phenomenon once per session, suffer 1d5 Energy damage to head and lose psionic ability until next turn.",
          },
          {
            Talent: "Shield Wall",
            Prerequisites: "Ambidextrous, WS 40",
            Aptitudes: "Defense, Weapon Skill",
            Benefit:
              "Re-roll one failed parry attempt per round when armed with a shield.",
          },
          {
            Talent: "Sprint",
            Prerequisites: "-",
            Aptitudes: "Agility, Fieldcraft",
            Benefit:
              "Full Move action gains extra meters equal to AG bonus. Run action doubles distance; gain 1 Fatigue if repeated in the next round.",
          },
          {
            Talent: "Step Aside",
            Prerequisites: "AG 40, Dodge or Parry",
            Aptitudes: "Agility, Defense",
            Benefit: "Make an additional Dodge or Parry attempt each round.",
          },
          {
            Talent: "Superior Surgeon",
            Prerequisites: "+10 Medical",
            Aptitudes: "Intelligence, Fieldcraft",
            Benefit:
              "+20 to Medical tests; ignore penalties for heavily damaged patients, -10 penalty for critical damage.",
          },
          {
            Talent: "Target Selection",
            Prerequisites: "BS 50",
            Aptitudes: "Ballistic Skill, Finesse",
            Benefit:
              "Shoot into melee with no penalty. Aim action prevents friendly fire.",
          },
          {
            Talent: "Thunder Charge",
            Prerequisites: "S 50",
            Aptitudes: "Strength, Offense",
            Benefit:
              "Charge action allows opposed Strength test against foes in your path, knocking them prone on failure.",
          },
          {
            Talent: "True Grit",
            Prerequisites: "T 40",
            Aptitudes: "Toughness, Defense",
            Benefit: "Reduce critical damage by Toughness bonus (minimum 1).",
          },
          {
            Talent: "Two-Weapon Master",
            Prerequisites:
              "AG 45, Ambidextrous, BS 40 or WS 40, Two-Weapon Wielder",
            Aptitudes: "Finesse, Offense",
            Benefit:
              "Remove penalties for attacking with two single-handed weapons.",
          },
        ],
      },
    },
  ],
};

export const PERSONAL_COMBAT_INFO = {
  title: "Personal Combat",
  sections: [
    {
      heading: "Hit Location",
      table: {
        columns: ["D100 roll", "Location"],
        rows: [
          { "D100 roll": "01-10", Location: "Head" },
          { "D100 roll": "11-20", Location: "Right Arm" },
          { "D100 roll": "21-30", Location: "Left Arm" },
          { "D100 roll": "31-70", Location: "Body" },
          { "D100 roll": "71-85", Location: "Right Leg" },
          { "D100 roll": "86-100", Location: "Left Leg" },
        ],
      },
    },
    {
      heading: "Hallucinogenic Effects",
      table: {
        columns: ["D10 Roll", "Effect"],
        rows: [
          {
            "D10 Roll": "1",
            Effect:
              "The character is convinced they have reached nirvana, or the equivalent thereof. The character is knocked prone, stunned, and loses 1d5 Stress.",
          },
          {
            "D10 Roll": "2",
            Effect:
              "The character believes they have been contacted by machine-elves, and is intent on silently taking in their wisdom. The character is stunned.",
          },
          {
            "D10 Roll": "3",
            Effect:
              "The character sees twisted, living forms emerging from the walls and floor around them. The character attacks the area around them randomly using the grenade scatter table for targeting.",
          },
          {
            "D10 Roll": "4",
            Effect:
              "The character believes that their shadow is a hostile creature, moves in random directions with a Full Action movement in an attempt to get away from it, retaining their reactions.",
          },
          {
            "D10 Roll": "5",
            Effect:
              "The character believes they are inside a virtual reality role-playing game, and that their life and choices are of little consequence. The character takes whatever actions they deem to be extraordinarily cool.",
          },
          {
            "D10 Roll": "6",
            Effect:
              "The character is overcome with paranoia, believing that even their closest friends are trying to kill them. The character must move to break line of sight with other characters and stay behind cover when possible.",
          },
          {
            "D10 Roll": "7",
            Effect:
              "The character collapses, experiencing ego death and believing they have died. Other characters must pass a +0 Intelligence test or believe the character died.",
          },
          {
            "D10 Roll": "8",
            Effect:
              "The character sees the world bathed in gore, and other people as horrific flesh-monsters who gurgle loudly and count as having Fear (3). Anything normally worthy of fear is perceived as innocent and comforting.",
          },
          {
            "D10 Roll": "9",
            Effect:
              "The character believes that their ideals could solve any conflict and begins to espouse them loudly, moving to a location where they can be seen by as many people as possible. The character then performs a -20 Charm, Command, or Logic test to present their rhetoric.",
          },
          {
            "D10 Roll": "10",
            Effect:
              "The character believes a parasitic worm has entered their body via their legs or chest, and makes a single weapon attack on themselves with 1d5 DoS.",
          },
        ],
      },
    },
    {
      heading: "Combat Actions",
      table: {
        columns: ["Action", "Type", "Length", "Description"],
        rows: [
          {
            Action: "Aim",
            Type: "Ranged / Melee",
            Length: "Half / Full",
            Description:
              "Grants +10 (Half Action) or +20 (Full Action) bonus to character's next attack.",
          },
          {
            Action: "Called Shot",
            Type: "Ranged / Melee",
            Length: "Full",
            Description:
              "Attack a specific location on a target with a -20 to WS or BS.",
          },
          {
            Action: "Standard Attack",
            Type: "Ranged / Melee",
            Length: "Half",
            Description:
              "Grants +10 to WS or BS, make one melee or ranged attack; jam on 96+ result.",
          },
          {
            Action: "Semi-Auto Burst",
            Type: "Ranged",
            Length: "Half",
            Description:
              "Grants +0 BS, additional hit for every two additional DoS; jam on 95+ result.",
          },
          {
            Action: "Full Auto Burst",
            Type: "Ranged",
            Length: "Half",
            Description:
              "Grants -10 BS, one hit for every DoS; Jam on 94+ result.",
          },
          {
            Action: "Overwatch",
            Type: "Ranged",
            Length: "Full",
            Description:
              "Shoot targets coming into a set 45-degree zone with a specified firing mode. Targets of an Overwatch shot must make a +0 Pinning test or become Pinned.",
          },
          {
            Action: "All Out Attack",
            Type: "Melee",
            Length: "Full",
            Description:
              "Give up that round's Evasion reaction to gain +30 WS.",
          },
          {
            Action: "Charge",
            Type: "Melee",
            Length: "Full",
            Description:
              "Move up to 3x AgB (last 4m in straight line at enemy), +20 to WS.",
          },
          {
            Action: "Defensive Stance",
            Type: "Melee",
            Length: "Full",
            Description:
              "Gain an additional Reaction. Opponents suffer -20 WS.",
          },
          {
            Action: "Feint",
            Type: "Melee",
            Length: "Half",
            Description:
              "Opposed WS test; if character wins, his next Melee attack cannot be Evaded.",
          },
          {
            Action: "Maneuver",
            Type: "Melee",
            Length: "Half",
            Description:
              "Make an opposed WS test against character in melee range; if successful, move them up to 1 meter in direction of choice.",
          },
          {
            Action: "Grapple",
            Type: "Melee",
            Length: "Full",
            Description:
              "Standard WS attack; on success, target is Grappled with the attacker in control; the attacker immediately makes a Grapple action. Grapple actions include Damage, Throw Down, Push, Break Free, Slip Free, or Take Control.",
          },
          {
            Action: "Disengage",
            Type: "Movement",
            Length: "Full",
            Description:
              "Break from melee without incurring a free attack, and take a Half Action movement.",
          },
          {
            Action: "Stand",
            Type: "Movement",
            Length: "Half",
            Description: "Stand up from being Prone.",
          },
          {
            Action: "Evasion",
            Type: "Movement",
            Length: "Reaction",
            Description:
              "Attempt to avoid an attack by using Dodge (ranged or melee) or Parry (melee) skills. If there is cover within AgB meters, may attempt to leap behind cover instead and go prone as a Dodge test. On success, attack still hits but character benefits from additional AP granted by cover.",
          },
          {
            Action: "Half Move",
            Type: "Movement",
            Length: "Half",
            Description: "Move up to AgB meters.",
          },
          {
            Action: "Full Move",
            Type: "Movement",
            Length: "Full",
            Description: "Move up to AgB x2 meters.",
          },
          {
            Action: "Run",
            Type: "Movement",
            Length: "Full",
            Description:
              "Move 6x Agility bonus, enemies get -20 BS and +20 WS to hit this character until next turn.",
          },
          {
            Action: "Tactical Advance",
            Type: "Movement",
            Length: "Full",
            Description:
              "Make a Half Move from one cover to another. Continue to take bonus from previous cover until reaching new one.",
          },
          {
            Action: "Focus Power",
            Type: "Varies",
            Length: "Varies",
            Description: "Manifests psionic abilities in combat.",
          },
          {
            Action: "Swift Attack",
            Type: "Melee",
            Length: "Half",
            Description:
              "Requires Swift Attack talent. Grants +0 WS, additional hit for every two additional DoS.",
          },
          {
            Action: "Lightning Attack",
            Type: "Melee",
            Length: "Half",
            Description:
              "Requires Lightning Attack talent. Grants -10 WS, one hit for every DoS.",
          },
        ],
      },
    },
    {
      heading: "Character Size",
      table: {
        columns: ["Size", "To Hit", "Stealth", "Base Movement"],
        rows: [
          {
            Size: "Miniscule (1)",
            "To Hit": "-30",
            Stealth: "+30",
            "Base Movement": "Agility Bonus-3",
          },
          {
            Size: "Puny (2)",
            "To Hit": "-20",
            Stealth: "+20",
            "Base Movement": "Agility Bonus-2",
          },
          {
            Size: "Scrawny (3)",
            "To Hit": "-10",
            Stealth: "+10",
            "Base Movement": "Agility Bonus-1",
          },
          {
            Size: "Average (4)",
            "To Hit": "+0",
            Stealth: "+0",
            "Base Movement": "Agility Bonus",
          },
          {
            Size: "Hulking (5)",
            "To Hit": "+10",
            Stealth: "-10",
            "Base Movement": "Agility Bonus+1",
          },
          {
            Size: "Enormous (6)",
            "To Hit": "+20",
            Stealth: "-20",
            "Base Movement": "Agility Bonus+2",
          },
          {
            Size: "Massive (7)",
            "To Hit": "+30",
            Stealth: "-30",
            "Base Movement": "Agility Bonus+3",
          },
          {
            Size: "Immense (8)",
            "To Hit": "+40 or larger",
            Stealth: "-40 or larger",
            "Base Movement": "Agility Bonus+4",
          },
        ],
      },
    },
    {
      heading: "Shock Table",
      table: {
        columns: ["Roll", "Result"],
        rows: [
          {
            Roll: "01-20",
            Result:
              "The character is badly startled. They can only take a single Half Action during their next turn, but afterward they act normally.",
          },
          {
            Roll: "21-40",
            Result:
              "Fear grips the character and they begin to shake and tremble. They suffer a -10 penalty on all tests for the rest of the encounter unless they can snap out of it.",
          },
          {
            Roll: "41-60",
            Result:
              "Reeling with shock, the character backs away from the source of their Fear. They cannot willingly approach the object of their Fear, but can otherwise act normally, with a –10 penalty on all tests until the end of the encounter.",
          },
          {
            Roll: "61-80",
            Result:
              "The character is frozen by terror. They can take no actions until they snap out of it, after which point they make all tests with a –10 penalty for the rest of the encounter.",
          },
          {
            Roll: "81-100",
            Result:
              "Panic grips the character. They must flee the source of their fear, if able, as fast as they can, and if prevented from doing so, can only take Half Actions and is at a –20 penalty to all tests. Once away from the danger, they must successfully snap out of it to regain control.",
          },
          {
            Roll: "101-120",
            Result:
              "Fainting dead away, the character keels over and remains Unconscious for 1d5 rounds. Once they regain consciousness, they are still shaken and take all tests with a –10 penalty until the end of the encounter.",
          },
          {
            Roll: "121-130",
            Result:
              "Totally overcome, the character screams and vomits uncontrollably for 1d5 rounds. During this time they can do nothing, and drop anything they are holding. Afterward, until the end of the encounter, the character can only take a single Half Action each turn.",
          },
          {
            Roll: "131-140",
            Result:
              "The character laughs hysterically and randomly attacks anything near them in a manic frenzy, firing wildly or attacking with whatever they have at hand. This effect lasts until the character snaps out of it or until they are knocked Unconscious or otherwise incapacitated.",
          },
          {
            Roll: "141-160",
            Result:
              "The character crumples to the ground for 1d5+1 rounds and begins sobbing and babbling, and can do nothing else. Even after they return to their senses, they are a complete mess, and suffer a –20 penalty on all tests until the end of the encounter.",
          },
          {
            Roll: "160-170",
            Result:
              "The character’s mind snaps. They become catatonic for 1d5 hours; for that time, they are Unconscious and cannot be roused.",
          },
          {
            Roll: "171+",
            Result:
              "The character is so overcome with terror that their heart stops: they must make a +0 Toughness test or die. If they succeed, the character still falls Unconscious for 1d5 hours, and cannot be roused for that time.",
          },
        ],
      },
    },
  ],
};

export const PSIONICS_INFO = {
  title: "Psionics",
  sections: [
    {
      heading: "Psionics Keywords",
      table: {
        columns: ["Ability Type", "Description"],
        rows: [
          {
            "Ability Type": "Psi Bolt",
            Description: "Works like a single-fire weapon.",
          },
          {
            "Ability Type": "Psi Barrage",
            Description:
              "Works like a semi-auto weapon; total hits cannot exceed psi rating used for power. First hit must strike the main target, others may also strike other targets within 2m of the main target, if they are in line of sight and within range.",
          },
          {
            "Ability Type": "Psi Storm",
            Description:
              "Number of hits is equal to DoS. Total hits cannot exceed psi rating used for power. Hit allocation as per Psi Barrage. Dodge as if Full-Auto fire.",
          },
          {
            "Ability Type": "Psi Blast",
            Description:
              "Radius is determined by psi rating. Equivalent of the Weapon Quality Blast (X). Dodge as if an Area Effect.",
          },
          {
            "Ability Type": "PR",
            Description: "Psi Rating, where applicable.",
          },
        ],
      },
    },
    {
      heading: "Psi Rating Increase Cost",
      table: {
        columns: ["Desired Psi Rating", "Cost in XP"],
        rows: [
          { "Desired Psi Rating": "1", "Cost in XP": "200" },
          { "Desired Psi Rating": "2", "Cost in XP": "300" },
          { "Desired Psi Rating": "3", "Cost in XP": "500" },
          { "Desired Psi Rating": "4", "Cost in XP": "600" },
          { "Desired Psi Rating": "5", "Cost in XP": "800" },
          { "Desired Psi Rating": "6+", "Cost in XP": "1000" },
        ],
      },
    },
    {
      heading: "Control Powers",
      table: {
        columns: [
          "Name",
          "Discipline",
          "Cost",
          "Prerequisite",
          "Action",
          "Focus Power",
          "Range",
          "Sustained",
          "Subtype / Effect",
        ],
        rows: [
          {
            Name: "Telepathic Link",
            Discipline: "Control",
            Cost: "100xp",
            Prerequisite: "PSI 35",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "20 x PR meters",
            Sustained: "No",
            "Subtype / Effect":
              "The target makes a +0 Willpower save against the Focus Power test. If the target fails, the Psionic User can either read the person's thoughts or send a mental message.",
          },
          {
            Name: "Erasure",
            Discipline: "Control",
            Cost: "100xp",
            Prerequisite: "Telepathic Link, FEL 30",
            Action: "Full",
            "Focus Power": "+0 PSI test",
            Range: "5 x PR meters",
            Sustained: "No",
            "Subtype / Effect":
              "The target makes a +0 Willpower save against the Focus Power test. If he fails, the Psionic User removes a memory of a recent event from the target. The Psionic User can remove an amount of time up to 10 x PR minutes, and the event must have been within PR hours prior. The enemy is left with no recollection of what occurred during that time.",
          },
          {
            Name: "Repeat",
            Discipline: "Control",
            Cost: "200xp",
            Prerequisite: "Telepathic Link",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "5 x PR meters",
            Sustained: "No",
            "Subtype / Effect":
              "The target makes a +10 Willpower test to oppose the Psionic User. If the Psionic User succeeds, the target must repeat the last action he took, such as firing at a target that no longer exists. This counts as the target's action for the round. The specified action cannot be directly harmful to the target.",
          },
          {
            Name: "Dominate",
            Discipline: "Control",
            Cost: "200xp",
            Prerequisite: "Erasure, PSI 40",
            Action: "Full",
            "Focus Power": "+0 PSI test",
            Range: "5 x PR meters",
            Sustained: "No",
            "Subtype / Effect":
              "The Psionic User nominates a number of targets up to half his PR (rounded up) who oppose this power with a +0 Willpower test. Each target that fails to resist the power must follow a simple command given by the Psionic User. If the command is a potentially suicidal act, each target receives a +20 to its Willpower test to oppose the power. In all cases, the command must be achievable in a single round.",
          },
          {
            Name: "Ocular Nondetection",
            Discipline: "Control",
            Cost: "400xp",
            Prerequisite: "Erasure, PR 4",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "10 x PR meters",
            Sustained: "Free Action",
            "Subtype / Effect":
              "A target within range, or the Psionic User themselves, gains the effect. While sustained, the target's Stealth skill is modified to +0 and gains a bonus to Stealth tests equal to 5x PR. Additionally, ranged attacks against the target suffer -5x PR. The effect is immediately lost upon moving out of range.",
          },
          {
            Name: "Puppet Master",
            Discipline: "Control",
            Cost: "400xp",
            Prerequisite: "Dominate, FEL 40",
            Action: "Full",
            "Focus Power": "-10 PSI test",
            Range: "10 x PR meters",
            Sustained: "Special",
            "Subtype / Effect":
              "The Psionic User nominates a single target in range and line of sight with total wounds no greater than 3 times the Psionic User's PR, who opposes this power with a +0 Willpower test. Upon failure, it is controlled by the Psionic User like a puppet. For the duration of the power, the Psionic User can divide his Actions between himself and the target. The dominated target uses its own Characteristics, but at -10. If at any point the Psionic User would make the target perform a potentially suicidal action, the target can attempt a +0 opposed Willpower test to try to break free of the power. The effect is immediately lost upon moving out of range.",
          },
        ],
      },
    },
    {
      heading: "Symbiosis Powers",
      table: {
        columns: [
          "Name",
          "Discipline",
          "Cost",
          "Prerequisite",
          "Action",
          "Focus Power",
          "Range",
          "Sustained",
          "Subtype / Effect",
        ],
        rows: [
          {
            Name: "Group Link",
            Discipline: "Symbiosis",
            Cost: "100xp",
            Prerequisite: "PER 35",
            Action: "Full",
            "Focus Power": "+10 PSI test",
            Range: "10 x PR meters",
            Sustained: "Free Action",
            "Subtype / Effect":
              "The Psionic User chooses a number of allies up to 2xPR within range. While sustained, the chosen creatures add half the Psionic User’s PR value (minimum 2) to their initiative value.",
          },
          {
            Name: "Invigorate",
            Discipline: "Symbiosis",
            Cost: "100xp",
            Prerequisite: "T 30",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "1 meter",
            Sustained: "No",
            "Subtype / Effect":
              "Remove Fatigue from the Psionic User and allies within range. Can remove total number of fatigue levels up to PR, can choose how many levels per target. A target may not be invigorated again for 12 hours.",
          },
          {
            Name: "Strengthen",
            Discipline: "Symbiosis",
            Cost: "300xp",
            Prerequisite: "Invigorate, PR 3",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "5 x PR meters",
            Sustained: "Free Action",
            "Subtype / Effect":
              "Up to PR allies (including the Psionic User) within range gain Unnatural Strength (PR), or increase their Unnatural Strength by 4 if they already possess the trait.",
          },
          {
            Name: "Fortify Thoughts",
            Discipline: "Symbiosis",
            Cost: "300xp",
            Prerequisite: "Invigorate, PSI 40",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "10 x PR meters",
            Sustained: "Free Action",
            "Subtype / Effect":
              "For the duration of this power, a number of allies up to the Psionic User's PR within range subtract their Willpower bonus from their degrees of failure on a failed Fear or Pinning test. If this reduces the result to zero or less, they count as having passed the Fear test with 1 degree of success.",
          },
          {
            Name: "Immune Overdrive",
            Discipline: "Symbiosis",
            Cost: "400xp",
            Prerequisite: "Invigorate, PR 4",
            Action: "Full",
            "Focus Power": "-10 PSI test",
            Range: "3 x PR meters",
            Sustained: "No",
            "Subtype / Effect":
              "Allies in range numbering up to PR, plus the Psionic User, recover wounds equal to the Psionic User’s PR, and recover from Pinning. A target may not be overdriven again for 24 hours.",
          },
          {
            Name: "Quicken",
            Discipline: "Symbiosis",
            Cost: "400xp",
            Prerequisite: "Invigorate",
            Action: "Full",
            "Focus Power": "-10 PSI test",
            Range: "3 x PR meters",
            Sustained: "Half Action",
            "Subtype / Effect":
              "Up to PR allies (including the Psionic User) within range can make an additional Dodge or Parry attempt per round.",
          },
        ],
      },
    },
    {
      heading: "Terror Powers",
      table: {
        columns: [
          "Name",
          "Discipline",
          "Cost",
          "Prerequisite",
          "Action",
          "Focus Power",
          "Range",
          "Sustained",
          "Subtype / Effect",
        ],
        rows: [
          {
            Name: "Fear",
            Discipline: "Terror",
            Cost: "100xp",
            Prerequisite: "PSI 35",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "5 x PR meters",
            Sustained: "No",
            "Subtype / Effect":
              "The target makes a +0 Willpower save against the Focus Power test. Upon failure, the target suffers the effects of a +0 roll on the Shock table.",
          },
          {
            Name: "Hubris",
            Discipline: "Terror",
            Cost: "200xp",
            Prerequisite: "Fear, PR 3",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "10 x PR meters",
            Sustained: "Half Action",
            "Subtype / Effect":
              "The target makes a +0 Willpower save against the Focus Power test. Upon failure, the target uses their Reaction to leave cover, moving up to their Half Action movement speed to do so.",
          },
          {
            Name: "Frenzy",
            Discipline: "Terror",
            Cost: "300xp",
            Prerequisite: "Fear, PR 4",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "10 x PR meters",
            Sustained: "Free Action",
            "Subtype / Effect":
              "The target makes a +0 Willpower save against the Focus Power test. Upon failure, the target gains a +10 bonus to WP, S, T, and WP, suffers a -20 penalty to BS, Int, and Fel, and is immune to Fear, Pinning, Stunning, and Fatigue; they cannot Parry, retreat, or Flee. When Frenzied, they must attack the nearest person to them in melee or move to engage them if possible without acting suicidally.",
          },
          {
            Name: "Psychosis",
            Discipline: "Terror",
            Cost: "200xp",
            Prerequisite: "Fear, PR 3",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "10 x PR meters",
            Sustained: "No",
            "Subtype / Effect":
              "The target makes a +0 Willpower save against the Focus Power test. Upon failure, it must roll on the Hallucinogenic Effects table and immediately apply the effects. The effect rolled on the table lasts for half PR rounds.",
          },
          {
            Name: "Doubt",
            Discipline: "Terror",
            Cost: "200xp",
            Prerequisite: "Fear, PR 3",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "10 x PR meters",
            Sustained: "Reaction",
            "Subtype / Effect":
              "While sustained, whenever a character attempts to attack the Psionic User, they must pass a +0 Willpower test or suffer a -5 to their attack roll per DoF.",
          },
          {
            Name: "Aura of Fear",
            Discipline: "Terror",
            Cost: "400xp",
            Prerequisite: "Psychosis, FEL 35",
            Action: "Full",
            "Focus Power": "-20 PSI test",
            Range: "Self",
            Sustained: "Half Action",
            "Subtype / Effect":
              "The Psionic User gains the Fear (1) trait as long as he sustains the power. Selected PR allies may automatically pass this Fear test. Should the Psionic User fail their Focus Power test, they must make a Fear(1) test.",
          },
        ],
      },
    },
    {
      heading: "Psychic Phenomena",
      table: {
        columns: ["Roll", "Effect"],
        rows: [
          {
            Roll: "01-03",
            Effect:
              "The Psionic User feels their own Psionic power grow, and permanently gains 1 point of Psionics.",
          },
          {
            Roll: "04-05",
            Effect:
              "The Psionic User feels that their Psionic power is temporarily bolstered, and gains 5 points of Psionics until the end of the session.",
          },
          {
            Roll: "06-08",
            Effect:
              "All creatures within 1d5 meters of the Psionic User are targeted with the Immune Overdrive Psionic Ability, even if the Psionic User does not have it known.",
          },
          {
            Roll: "09-11",
            Effect:
              "The Psionic User feels their control of the infected tighten. The Psionic User gains a +20 bonus to Focus Power tests made against characters with the Baschet-Stratis Carrier trait for PR rounds.",
          },
          {
            Roll: "12-14",
            Effect:
              "The Psionic User feels unnaturally perceptive, gaining Unnatural Perception(2) for 1 hour.",
          },
          {
            Roll: "15-17",
            Effect:
              "The Psionic User feels comforted by the existence of a Psionic force many thousands of light-years away, losing 1d10 Stress.",
          },
          {
            Roll: "18-20",
            Effect:
              "The Psionic User feels strangely in touch with alien forces for a short time, gaining a +30 to any Loren (Siliconians) tests for 1d10 minutes.",
          },
          {
            Roll: "21-23",
            Effect:
              "The Psionic User’s mind is strained by making an extra effort to ensure its success, and gains 1d10 Stress.",
          },
          {
            Roll: "24-26",
            Effect:
              "Anyone affected by the Psionic Ability suffers pleasant hallucinations and must pass a +0 Willpower test or be Stunned for 1 round.",
          },
          {
            Roll: "27-29",
            Effect:
              "The Psionic User’s Psionics characteristic is set to 100 until the end of their next turn.",
          },
          {
            Roll: "30-32",
            Effect:
              "The Psionic User targets the nearest creature to them without the Baschet-Stratis Carrier trait within 10 meters with the Infect Psionic Ability, even if the Psionic User does not have it known.",
          },
          {
            Roll: "33-35",
            Effect:
              "Each character (including the Psionic User) within a 3d10 meter radius becomes short of breath for one round and cannot Run or Charge.",
          },
          {
            Roll: "36-38",
            Effect:
              "The Psionic user is briefly perceived by others and themselves as a twisted, gruesome figure. They gain the Fear (1) trait until the start of the next turn, and gain 1d10 Stress.",
          },
          {
            Roll: "39-41",
            Effect:
              "The Psionic User suffers 1d10 Psionics and Willpower damage for 1d5 turns as their own inherent phobias, suspicions, and hatred surges forth in a wave of unbound emotion.",
          },
          {
            Roll: "42-44",
            Effect:
              "Those within 1d10 meters of the Psionic User feel a distinct distrust for them for PR hours.",
          },
          {
            Roll: "45-47",
            Effect:
              "The Psionic user loses control of themselves for a moment, knocking themselves Prone and entering into a stupor that takes a Half Action to recover from.",
          },
          {
            Roll: "48-50",
            Effect: "Nothing happens.",
          },
          {
            Roll: "51-53",
            Effect:
              "The Psionic User uses the Epidemic Psionic Ability, even if the Psionic User does not have it known, and targets the nearest PR creatures to them within 50 meters.",
          },
          {
            Roll: "54-56",
            Effect:
              "Each character within a 3d10 meter radius undergoes a mass hallucination in which ghosts call out from beyond the grave. Characters in the radius must make a Fear(1) test.",
          },
          {
            Roll: "57-59",
            Effect:
              "The Psionic user suddenly feels overwhelmed by the number of minds near them. The Psionic user gains 2 Stress per sentient person within PR x 5 meters.",
          },
          {
            Roll: "60-62",
            Effect:
              "The Psionic User’s body forces them to scream with unnatural force, requiring them to pass a +0 Toughness test or be deafened for 1d10 rounds and gain 1d5 Stress.",
          },
          {
            Roll: "63-65",
            Effect:
              "The Psionic User’s mind is assaulted by unknowable and horrific hallucinations, and must make a Fear(2) test. On a failure, they gain 2d10 Stress.",
          },
          {
            Roll: "66-68",
            Effect:
              "For a split second, everyone within 1d100 meters has lifelike visions of the Psionic User’s deepest trauma, and must make a -10 Willpower test or gain 2d10 Stress.",
          },
          {
            Roll: "69-71",
            Effect:
              "The Psionic User loses control of their abilities for a moment, and the Psionic Ability is cast 1d5 more times with random targets.",
          },
          {
            Roll: "72-74",
            Effect:
              "A violent ripple of Psionic discord causes all creatures within 2d10 meters of the Psionic User to be targeted with the Frenzy Psionic Ability, even if the Psionic User does not have it known.",
          },
          {
            Roll: "75-77",
            Effect:
              "In the first instance of the Psionic Ability dealing damage (if applicable), the Psionic Ability does the same amount of damage directly to the Psionic User.",
          },
          {
            Roll: "78-80",
            Effect:
              "The Psionic User’s perception of reality grows more distorted. The Psionic User gains 3d10 Stress.",
          },
          {
            Roll: "81-83",
            Effect:
              "The Psionic User is overcome with a powerful sense of meaninglessness. The Psionic User takes 1d10 Willpower damage (which recovers at a rate of 1 point per day), and gains 2d10 Stress.",
          },
          {
            Roll: "84-86",
            Effect:
              "The Psionic User becomes irrationally terrified of those they cannot control, with the sensing of any characters with the Zero Point Zero Two talent imposing a Fear(4) test for 1 x PR minutes.",
          },
          {
            Roll: "87-89",
            Effect:
              "The Psionic User is consumed by crippling hallucinations, prompting them to suffer the effects of a roll on the Hallucinogenic Effects table for 1d5 turns. The Psionic User gains 1d10 Stress.",
          },
          {
            Roll: "90-92",
            Effect:
              "The Psionic User and a random sentient being within 50 meters swap consciousness for 1d10 rounds. Each creature retains its WP, BS, INT, PER, WP, and FEL skills during the swap, but all other characteristics are of the new host body, and both creatures take permanent 1d5 Intelligence damage. If either body is slain, the effect ends immediately and both parties return to their original bodies. If no creature is in range, the Psionic User instead is Stunned for 1d5 rounds, and gains 4d10 Stress.",
          },
          {
            Roll: "93-95",
            Effect:
              "The minds of all creatures within 1d100 meters are ravaged by rampant Psionic force, provoking a Fear(2) test from each of them. The Psionic User makes a Fear(4) test instead and gains 1d10 Stress.",
          },
          {
            Roll: "96-98",
            Effect:
              "The Psionic User has intense visions of another, better world, and struggles to reconcile it with the pointless cruelties of reality. The Psionic User’s Stress threshold is permanently lowered by 1d5. If their Stress threshold is already less than 10, then they suffer permanent 1d5 Willpower damage instead.",
          },
          {
            Roll: "99-100",
            Effect:
              "All other creatures within 10 x PR meters of the Psionic User are targeted with the Hemorrhage Psionic Ability, even if the Psionic User does not have it known. If there are no other creatures within range, the Psionic User instead targets themselves.",
          },
        ],
      },
    },
    {
      heading: "Telekinesis Powers",
      table: {
        columns: [
          "Name",
          "Discipline",
          "Cost",
          "Prerequisite",
          "Action",
          "Focus Power",
          "Range",
          "Sustained",
          "Effect",
        ],
        rows: [
          {
            Name: "Assail",
            Discipline: "Telekinesis",
            Cost: "200xp",
            Prerequisite: "PSI 35",
            Action: "Half",
            "Focus Power": "+10 PSI test",
            Range: "20 x PR meters",
            Sustained: "No",
            Effect:
              "Psi Bolt. The Psionic User hurls objects or, failing to find any, his mental energy at the target dealing 1d10+PR Impact damage. Pen: 2. If the Psychokineticist succeeds in hitting with 3+ DoS, the target is also thrown 1d5 meters and knocked Prone.",
          },
          {
            Name: "Shock",
            Discipline: "Telekinesis",
            Cost: "200xp",
            Prerequisite: "PSI 35",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "20 x PR meters",
            Sustained: "No",
            Effect:
              "Psi Barrage. Discharge lightning at enemies. Does 1d10+PR Energy damage, Pen 4.",
          },
          {
            Name: "Crush",
            Discipline: "Telekinesis",
            Cost: "300xp",
            Prerequisite: "Assail, PSI 40",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "10 x PR meters",
            Sustained: "No",
            Effect:
              "Psi Bolt. The target makes a Toughness save against the Psionic User’s Focus Power test. Upon failure, the target suffers 1d10+PR Impact damage. Pen 2. This attack carries the Snare (PR/2) quality.",
          },
          {
            Name: "Shockwave",
            Discipline: "Telekinesis",
            Cost: "300xp",
            Prerequisite: "Shock, PSI 45",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "Self",
            Sustained: "No",
            Effect:
              "Psi Blast. Each character within PR meters of the Psionic User, but not the Psionic User themself, suffers 1d10+PR Explosive damage. They are also pushed PR meters directly away from the Psionic User.",
          },
          {
            Name: "Gravitational Burst",
            Discipline: "Telekinesis",
            Cost: "400xp",
            Prerequisite: "Crush, PR 4",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "20 x PR meters",
            Sustained: "No",
            Effect:
              "Psi Storm. The Psionic User releases a burst of crushing gravitational force. Deals 1d10+4+2xPR Energy damage.",
          },
          {
            Name: "Telekinetic Vortex",
            Discipline: "Telekinesis",
            Cost: "400xp",
            Prerequisite: "Shockwave, PR 5",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "5 x PR meters",
            Sustained: "Half Action",
            Effect:
              "The Psionic User chooses a point in range and line of sight, and creates a vortex of energy centered on that point that starts with a radius of 2m. Each character who is touching the vortex at the end of the Psionic User’s turn suffers 2d10+2xPR Explosive damage, with Pen of the current vortex radius. The Psionic User cannot voluntarily stop sustaining this power. Instead, at the beginning of each turn the Psionic User is sustaining the vortex, he must make a Challenging (+0) Willpower test with -5 per meter of the vortex's current radius. If passed, he may: Increase or decrease the radius by a meter or move it meters equal to PR. If the Psionic User fails the WP test to sustain the vortex, its radius increases by one meter and it moves a number of meters equal to the Psionic User’s PR in a random direction. If the vortex radius is reduced to 0, the power ends and the vortex disappears. If the vortex radius exceeds the Psionic User’s PR, it explodes and the Psionic User suffers 2d10+4xPR Explosive damage, with Pen of the vortex radius.",
          },
        ],
      },
    },
    {
      heading: "Combustion Powers",
      table: {
        columns: [
          "Name",
          "Discipline",
          "Cost",
          "Prerequisite",
          "Action",
          "Focus Power",
          "Range",
          "Sustained",
          "Effect",
        ],
        rows: [
          {
            Name: "Manipulate Flame",
            Discipline: "Combustion",
            Cost: "100xp",
            Prerequisite: "PSI 35",
            Action: "Half",
            "Focus Power": "+20 PSI test",
            Range: "10 x PR meters",
            Sustained: "Half Action",
            Effect:
              "The Psionic User can either extinguish or control a fire with radius no greater than PR meters. If the Psionic User controls the fire, they may move it up to PR meters per round along a flammable surface.",
          },
          {
            Name: "Spontaneous Combustion",
            Discipline: "Combustion",
            Cost: "200xp",
            Prerequisite: "Manipulate Flame, AG 30",
            Action: "Half",
            "Focus Power": "+10 PSI test",
            Range: "20 x PR meters",
            Sustained: "No",
            Effect:
              "Psi Bolt. The Psionic user provokes spontaneous combustion around the target, dealing 1d10+2+2xPR Energy damage. The attack counts as having the Flame attribute.",
          },
          {
            Name: "Fire Shield",
            Discipline: "Combustion",
            Cost: "300xp",
            Prerequisite: "Manipulate Flame, AG 35",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "20 x PR meters",
            Sustained: "Free Action",
            Effect:
              "While sustained, any attacker in range who successfully strikes the Psionic User suffers retribution. A Psi Bolt dealing PR Energy damage immediately strikes the attacker. This damage is not reduced by Armour or Toughness bonus. The attack counts as having the Flame attribute.",
          },
          {
            Name: "Flame Breath",
            Discipline: "Combustion",
            Cost: "300xp",
            Prerequisite: "Spontaneous Combustion, PR 3",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "20 x PR meters",
            Sustained: "No",
            Effect:
              "Psi Barrage. The Psionic User attempts to strike for 1d10+2+2xPR Energy damage. The attack counts as having the Flame attribute.",
          },
          {
            Name: "Molten Beam",
            Discipline: "Combustion",
            Cost: "400xp",
            Prerequisite: "Spontaneous Combustion, PR 4, AG 40",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "5 x PR meters",
            Sustained: "No",
            Effect:
              "Psi Bolt. The Psionic User creates a blindingly-bright beam of sun-hot energy dealing 1d10+5+3xPR Energy damage. Pen: 2xPR.",
          },
          {
            Name: "Inferno",
            Discipline: "Combustion",
            Cost: "500xp",
            Prerequisite: "Molten Beam, PR 5",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "10 x PR meters",
            Sustained: "No",
            Effect:
              "Psi Blast. The Psionic User creates an explosion of flame centered on his target, with no chance of escape. All targets within PR meters of the target take 2d10+3xPR Energy damage. The attack counts as having the Flame attribute.",
          },
        ],
      },
    },
    {
      heading: "Disruption Powers",
      table: {
        columns: [
          "Name",
          "Discipline",
          "Cost",
          "Prerequisite",
          "Action",
          "Focus Power",
          "Range",
          "Sustained",
          "Effect",
        ],
        rows: [
          {
            Name: "Telekinetic Control",
            Discipline: "Disruption",
            Cost: "100xp",
            Prerequisite: "PSI 35",
            Action: "Half",
            "Focus Power": "+20 PSI test",
            Range: "10 x PR meters",
            Sustained: "Half Action",
            Effect:
              "The Psionic User can move an object weighing up to 2x PR kilos a number of meters equal to 2x PR. If the object ever leaves the range of the power, the power ends.",
          },
          {
            Name: "Jam",
            Discipline: "Disruption",
            Cost: "200xp",
            Prerequisite: "INT 30",
            Action: "Half",
            "Focus Power": "-10 PSI test",
            Range: "5 x PR meters",
            Sustained: "No",
            Effect:
              "The Psionic User chooses up to PR ranged weapons. The selected weapons gain the Unreliable trait. If the Psionic User’s DoS exceeds the PR used, the weapons jam immediately. If the Psionic User fails with 3+ DoF, their own weapons immediately jam.",
          },
          {
            Name: "Telekinetic Shield",
            Discipline: "Disruption",
            Cost: "200xp",
            Prerequisite: "Telekinetic Control, INT 35",
            Action: "Half",
            "Focus Power": "+20 PSI test",
            Range: "Self",
            Sustained: "Free Action",
            Effect:
              "While sustained, all of the Psionic User’s hit locations are considered to be in Cover with an Armor Value equal to half of PR. The shield can be damaged in the same manner as Cover. If the shield is reduced to 0 Armor Value, it is destroyed and the power is no longer sustained.",
          },
          {
            Name: "Telekinetic Dome",
            Discipline: "Disruption",
            Cost: "300xp",
            Prerequisite: "Telekinetic Shield, PR 4",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "5 x PR meters",
            Sustained: "Free",
            Effect:
              "The Psionic User creates a dome of energy with radius of half PR meters, rounding up. Each ally inside the dome gains Armor points equal to PR to all Hit Locations against any attack from outside the dome. However, characters may still physically pass through the dome at no penalty.",
          },
          {
            Name: "Einstein-Rosen Bridge",
            Discipline: "Disruption",
            Cost: "400xp",
            Prerequisite: "Telekinetic Dome, PR 5",
            Action: "Extended Action (3)",
            "Focus Power": "-20 PSI test",
            Range: "1 x PR kilometers",
            Sustained: "No",
            Effect:
              "The Psionic User chooses a point in space they know of, and opens an Einstein-Rosen bridge to that location using a small amount of Exotic Matter. The bridge lasts for a number of rounds equal to the Psionic User’s PR, and has a radius equal to the Psionic User’s PR as well. The two sides of the bridge are linked, and people or objects may move between them provided they can fit.",
          },
          {
            Name: "EMP Field",
            Discipline: "Disruption",
            Cost: "300xp",
            Prerequisite: "Jam, INT 40",
            Action: "Half",
            "Focus Power": "+0 PSI test",
            Range: "10 x PR meters",
            Sustained: "No",
            Effect:
              "The Psionic User chooses a point anywhere within range and line of sight. This power creates an EMP(X) field centered at this point, with a radius in meters equal to PR.",
          },
        ],
      },
    },
  ],
};

export const RULEBOOK_DATA = {
  character: CHARACTER_INFO,
  stress: STRESS_INFO,
  gear: GEAR_INFO,
  "personal-combat": PERSONAL_COMBAT_INFO,
  talents: TALENT_INFO,
  traits: TRAIT_INFO,
  psionics: PSIONICS_INFO,
  "energy-damage": CRITICAL_DAMAGE_ENERGY,
  "explosive-damage": CRITICAL_DAMAGE_EXPLOSIVE,
  "impact-damage": CRITICAL_DAMAGE_IMPACT,
  "rending-damage": CRITICAL_DAMAGE_RENDING,
};
