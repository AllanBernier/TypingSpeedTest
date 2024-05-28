

const frenchWords = ["bleu", "super", "autre", "bizarre", "difficile", "drôle", "étrange", "facile", "grave", "impossible", "jeune", "juste", "libre", "malade", "même", "pauvre", "possible", "propre", "rouge", "sale", "simple", "tranquille", "triste", "vide", "faux", "français", "gros", "heureux", "mauvais", "sérieux", "vieux", "vrai", "ancien", "beau", "blanc", "certain", "chaud", "cher", "clair", "content", "dernier", "désolé", "différent", "droit", "entier", "fort", "froid", "gentil", "grand", "haut", "humain", "important", "joli", "léger", "long", "meilleur", "mort", "noir", "nouveau", "pareil", "petit", "plein", "premier", "prêt", "prochain", "quoi", "seul", "tout", "vert", "vivant", "aide", "chef", "enfant", "garde", "gauche", "geste", "gosse", "livre", "merci", "mort", "ombre", "part", "poche", "professeur", "tour", "fois", "madame", "paix", "voix", "affaire", "année", "arme", "armée", "attention", "balle", "boîte", "bouche", "carte", "cause", "chambre", "chance", "chose", "classe", "confiance", "couleur", "cour", "cuisine", "dame", "dent", "droite", "école", "église", "envie", "épaule", "époque", "équipe", "erreur", "espèce", "face", "façon", "faim", "famille", "faute", "femme", "fenêtre", "fête", "fille", "fleur", "force", "forme", "guerre", "gueule", "habitude", "heure", "histoire", "idée", "image", "impression", "jambe", "joie", "journée", "langue", "lettre", "lèvre", "ligne", "lumière", "main", "maison", "maman", "manière", "marche", "merde", "mère", "minute", "musique", "nuit", "odeur", "oreille", "parole"]

export default (count: number) => {
  return Array.from({ length: count }, () => frenchWords[Math.floor(Math.random() * frenchWords.length)])
}