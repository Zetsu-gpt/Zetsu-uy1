function firework(t, i, pts) {
    t -= i * 200; // Décalage pour lancer chaque feu en décalé

    let id = i + Chars.length * parseInt(t - t % duration); // ID unique basé sur le temps et l'index
    t = (t % duration) / duration; // Normalisation du temps entre 0 et 1

    let dx = (i * 2) * w / (1 + chars.length); // Position horizontale
    dx += Math.min(0.33, t) * 100 * Math.sin(id); // Légère oscillation horizontale

    let dy = h * 0.5; // Position verticale au centre
    dy += Math.sin(id * 4547.411) * h * 0.1; // Variation verticale pour effet aléatoire

    if (t < 0.33) {
        rocket(dx, dy, id, t * 3); // Animation de montée
    } else {
        explosion(pts, dx, dy, id, Math.min(1, Math.max(0, t - 0.33) * 2)); // Explosion
    }
}
