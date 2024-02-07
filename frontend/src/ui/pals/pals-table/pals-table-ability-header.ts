export const COOLING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/cooling-icon.webp" alt="Cooling Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const FARMING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/farming-icon.webp" alt="Farming Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const GATHERING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/gathering-icon.webp" alt="Gathering Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const GENERATING_ELECTRICITY_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/generating-electricity-icon.webp" alt="Generating Electricity Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const HANDIWORK_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/handiwork-icon.webp" alt="Handiwork Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const KINDLING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/kindling-icon.webp" alt="Kindling Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const LUMBERING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/lumbering-icon.webp" alt="Lumbering Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const MEDICINE_PRODUCTION_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/medicine-production-icon.webp" alt="Medicine Production Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const MINING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/mining-icon.webp" alt="Mining Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const PLANTING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/planting-icon.webp" alt="Planting Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const TRANSPORTING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/transporting-icon.webp" alt="Transporting Icon" width="24" height="24" style="margin-right: 0.5rem" />`;
export const WATERING_IMAGE_TAG = `<img src="${import.meta.env.BASE_URL}${import.meta.env.MODE === 'production' ? '/' : ''}assets/icons/abilities/watering-icon.webp" alt="Watering Icon" width="24" height="24" style="margin-right: 0.5rem" />`;

export function palsTableAbilityComponentParams(imgTag: string) {
    return {
        template:
            '<div class="ag-cell-label-container" role="presentation">' +
            '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
            '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
            '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
            '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
            '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
            '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
            `    ${imgTag} <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>` +
            '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
            '  </div>' +
            '</div>',
    };
}
