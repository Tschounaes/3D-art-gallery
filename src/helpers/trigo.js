export const addVectors = (v1, v2) => {
    return [v1[0]+v2[0], v1[1]+v2[1], v1[2]+v2[2]];
}

export const scaleVector = (v, amt) => {
    return [v[0]*amt, v[1]*amt, v[2]*amt];
}

export const subtractVectors = (v1, v2) => {
    return [v1[0]-v2[0], v1[1]-v2[1], v1[2]-v2[2]];
}

export const vectorLength = (v) => {
    return Math.sqrt(v[0]**2 + v[1]**2 + v[2]**2);
}

export const crossProduct = (a, b) => {
    const cross = [(a[1]*b[2]-a[2]*b[1]) , (a[2]*b[0]-a[0]*b[2]) , (a[0]*b[1]-a[1]*b[0])];
    const len = vectorLength(cross);
    return scaleVector(cross, (1/len));
}