import fs from 'node:fs';

export function generateData(data) {
    const now = new Date();
    const content = [
        '/*',
        ' * This file has been automatically generated.',
        ' * Any modifications made to this file may be lost',
        ' * upon regeneration.',
        ` * Generated on: ${now}`,
        ' * Generated by: npm --workspace=scrapper start',
        ' */',
        '',
        '/* eslint-disable */',
        '',
        'const data = [',
    ];

    data.forEach((pal) => {
        content.push(
            '    {',
            `        abilitiesCooling: ${pal.abilitiesCooling},`,
            `        abilitiesFarming: ${pal.abilitiesFarming},`,
            `        abilitiesGathering: ${pal.abilitiesGathering},`,
            `        abilitiesGeneratingElectricity: ${pal.abilitiesGeneratingElectricity},`,
            `        abilitiesHandiwork: ${pal.abilitiesHandiwork},`,
            `        abilitiesKindling: ${pal.abilitiesKindling},`,
            `        abilitiesLumbering: ${pal.abilitiesLumbering},`,
            `        abilitiesMedicineProduction: ${pal.abilitiesMedicineProduction},`,
            `        abilitiesMining: ${pal.abilitiesMining},`,
            `        abilitiesPlanting: ${pal.abilitiesPlanting},`,
            `        abilitiesTransporting: ${pal.abilitiesTransporting},`,
            `        abilitiesWatering: ${pal.abilitiesWatering},`,
            `        drops: ${(pal.drops.length > 0 && JSON.stringify(pal.drops)) || 'null'},`,
            `        elements: ${(pal.elements.length > 0 && JSON.stringify(pal.elements)) || 'null'},`,
            `        food: ${pal.food},`,
            `        index: ${pal.index},`,
            `        name: "${pal.name}",`,
            `        production: ${(pal.production.length > 0 && JSON.stringify(pal.production)) || 'null'},`,
            '    },',
        );
    });

    content.push('];', '', 'module.exports = data');

    fs.writeFileSync('../backend/seeders-data/v1.4.0.cjs', content.join('\n'));
}
