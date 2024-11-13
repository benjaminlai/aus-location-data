import * as fs from 'fs';
import * as path from 'path';

import { Location } from './types/ausPostcodes';

const readLocationsFromFile = (filePath: string): Location[] => {
    const jsonData = fs.readFileSync(path.resolve(filePath), 'utf-8');
    return JSON.parse(jsonData) as Location[];
}

export const findLocationsByPostcode = (postcode: string): Location[] => {
    const locationsFilePath = path.join(__dirname, 'resources', 'aus_postcodes.json');
    const locations = readLocationsFromFile(locationsFilePath);

    return locations.filter(location => location.postcode === postcode);
}
