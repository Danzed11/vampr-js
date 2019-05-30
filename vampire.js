class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.offspring === null) {
      return false;
    }
    for (let i = 0; i < this.numberOfOffspring; i++) {
      if(vampire.name === this.offspring[i].name)
        return true;
    
    }
    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const original = new Vampire("Original", 1800);
const ansel = new Vampire("Ansel", 1850);
  const sarah = new Vampire("Sarah", 1900);
  const elgort = new Vampire("Elgort", 1900);
    const andrew = new Vampire("Andrew", 1950);

const bart = new Vampire("Bart", 1850);

const hmm = new Vampire("hmm", 2019);

original.addOffspring(ansel);
original.addOffspring(bart);
original.addOffspring(hmm);

ansel.addOffspring(elgort);
ansel.addOffspring(sarah);

elgort.addOffspring(andrew);
module.exports = Vampire;

// console.log(elgort.numberOfOffspring);
// console.log(andrew.numberOfVampiresFromOriginal);
console.log(ansel.isMoreSeniorThan(sarah));