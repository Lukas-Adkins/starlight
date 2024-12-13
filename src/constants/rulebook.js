// Critical Damage Tables for the Starlight System
export const CRITICAL_DAMAGE = {
    title: "Critical Damage",
    sections: [
      {
        heading: "Energy, Arm",
        table: {
          columns: ["Damage", "Effect"],
          rows: [
            { crit: 1, effect: "The energy pulse disrupts motor function in the arm. All tests using that arm suffer a –30 penalty for 1d5 rounds." },
            { crit: 2, effect: "A direct hit overloads the nervous system, rendering the arm non-functional for 1d5 rounds. The target also suffers 1 level of Fatigue." },
            { crit: 3, effect: "Superficial burns cause significant discomfort. The target suffers 1d5 Fatigue and can only take a Half Action during their next turn." },
            { crit: 4, effect: "Neurological shock causes temporary motor dysfunction. The target is Stunned for 1 round, knocked Prone, and the arm is non-functional for 1d10 rounds." },
            { crit: 5, effect: "Severe thermal damage renders the arm inoperable until treated. The target is Stunned for 1 round." },
            { crit: 6, effect: "Intense heat damage causes localized fusion of materials and tissue. The target suffers 1d5 Fatigue, 1d5 Weapon Skill and Ballistic Skill damage, and must make a Challenging (+0) Toughness test or lose the hand." },
            { crit: 7, effect: "Thermal stress fractures the bone and damages the marrow. The target suffers 1d5 Fatigue, is Stunned for 1 round, and the arm remains inoperable until repaired." },
            { crit: 8, effect: "Severe dermal and muscular degradation exposes underlying bone. The target suffers 1d10 Fatigue and must make a Challenging (+0) Toughness test or be Stunned for 1d5 rounds. The arm is permanently lost." },
            { crit: 9, effect: "Critical burns destroy the limb entirely, reducing it to non-functional tissue and bone. The target must make a Challenging (+0) Toughness test or die from shock. If they survive, they lose the arm." },
            { crit: 10, effect: "The arm is vaporized, and the target collapses due to overwhelming trauma, dying immediately." },
          ],
        },
      },
      {
        heading: "Energy, Body",
        table: {
          columns: ["Damage", "Effect"],
          rows: [
            { crit: 1, effect: "The energy impact causes the target to lose their breath. Only a Half Action is possible on their next turn." },
            { crit: 2, effect: "The force of the hit destabilizes the target. They must make a Challenging (+0) Toughness test or be knocked Prone." },
            { crit: 3, effect: "Thermal exposure damages epidermal layers and muscle tissue, resulting in 2 levels of Fatigue and 1d5 Toughness damage." },
            { crit: 4, effect: "Third-degree burns and widespread pain cause the target to suffer 1d10 Fatigue. Only a Half Action is possible on their next turn." },
            { crit: 5, effect: "The concussive force and thermal shock cause the target to collapse. They are knocked Prone, may catch fire (Challenging +0 Agility test), and are Stunned for 1 round." },
            { crit: 6, effect: "The energy discharge destabilizes the target and causes severe burns. They are Stunned for 1d10 rounds, knocked Prone, and may catch fire (Challenging +0 Agility test)." },
            { crit: 7, effect: "Organ failure occurs due to thermal damage. The target is Stunned for 2d10 rounds, and their Toughness is permanently reduced by 1d10." },
            { crit: 8, effect: "Extreme energy exposure causes necrosis and fluid seepage from the wound. The target is Stunned for 2d10 rounds, and Strength, Toughness, and Agility are halved until treated. Permanently reduce Fellowship by 2d5." },
            { crit: 9, effect: "Thermal overload incinerates the target entirely. Death is instantaneous." },
            { crit: 10, effect: "Any stored ammunition ignites. Roll 1d10; on 6+, nearby targets suffer 1d10+5 Explosive damage to a random location. Grenades or missiles detonate after 1 round." },
          ],
        },
      },
      {
        heading: "Energy, Head",
        table: {
          columns: ["Damage", "Effect"],
          rows: [
            { crit: 1, effect: "A glancing blow causes temporary disorientation, resulting in a –10 penalty to all tests (except Toughness) for 1 round." },
            { crit: 2, effect: "Flash exposure temporarily blinds the target for 1 round." },
            { crit: 3, effect: "A focused hit damages auditory structures. The target is Deafened for 1d5 hours unless treated." },
            { crit: 4, effect: "The energy burns away hair and inflicts surface burns. The target suffers 2 levels of Fatigue and is Blinded for 1d5 rounds." },
            { crit: 5, effect: "Severe cranial burns incapacitate the target. They are Blinded for 1d10 rounds, Stunned for 1 round, and lose all hair. Permanently reduce Fellowship by 1." },
            { crit: 6, effect: "Severe damage melts facial features, impairing vision. The target suffers 1d5 Fatigue, is Blinded for 1d10 hours, and loses 1d5 Fellowship and Perception permanently." },
            { crit: 7, effect: "Intense thermal damage fractures the skull. The target suffers 1d10 Fatigue, permanent Blindness, and significant aesthetic and functional degradation (new Fellowship score determined)." },
            { crit: 8, effect: "Catastrophic cranial failure leads to immediate death." },
            { crit: 9, effect: "Overpressure from thermal overload causes the brain to rupture. Death is instantaneous." },
            { crit: 10, effect: "Overwhelming energy causes full-body combustion, sending the headless target running for 2d10 meters. Anything flammable in its path risks ignition." },
          ],
        },
      },
    ],
};


export const RULEBOOK_DATA = {
    introduction: {
        title: "Introduction",
        sections: [
          {
            heading: "About the System",
            content: `This document serves as both a quick-reference guide and a rulebook for the Starlight game system. It is a slimmer and more widely applicable version of the Dark Heresy 2e system. Familiarity with DH2e is recommended.`,
          },
        ],
      },
  character: `
    Characters are the heart of any adventure. Build your character by choosing attributes, skills, and abilities.
    Use the table below to allocate your starting points:
  `,
  gear: `
    Gear helps your characters survive and thrive. From swords to futuristic blasters, gear matters!
    Here's an example of item stats:
  `,
  mechs: `
    Mechs are powerful machines piloted by characters. Choose your model and customize it with weapons, shields, and upgrades.
    See the mech specs table for an overview:
  `,
  "personal-combat": `
    Engage in thrilling personal combat scenarios. Use the rules below to determine attack outcomes.
  `,
  "talents-traits": `
    Talents and traits define your character’s unique capabilities. Choose wisely to craft a balanced or specialized adventurer.
  `,
  "elite-advances": `
    Elite advances are for experienced characters ready to face the toughest challenges.
  `,
  psionics: `
    Psionics allow characters to wield mental powers. Master these abilities to outsmart your foes and overcome obstacles.
  `,
  "critical-damage": CRITICAL_DAMAGE
};
