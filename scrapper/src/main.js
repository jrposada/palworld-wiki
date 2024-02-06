import * as cheerio from 'cheerio';

async function main() {
    const baseUrl = 'https://palworld.fandom.com';
    const indexUrl = `${baseUrl}/wiki/Paldeck`;

    // const html = await (await fetch(indexUrl)).text();
    const html = `
    <table class="fandom-table sortable jquery-tablesorter" style="margin: 0 auto">
  <thead>
    <tr class="fixed-header">
      <th
        class="headerSort"
        tabindex="0"
        role="columnheader button"
        title="Sort ascending"
      >
        No.
      </th>
      <th
        colspan="2"
        class="headerSort"
        tabindex="0"
        role="columnheader button"
        title="Sort ascending"
      >
        Pal
      </th>
      <th
        colspan="2"
        class="headerSort"
        tabindex="0"
        role="columnheader button"
        title="Sort ascending"
      >
        Element(s)
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center">001</td>
      <td width="15%">
        <div class="center">
          <div class="floatnone">
            <a href="/wiki/Lamball" title="Lamball"
              ><img
                alt="Lamball menu"
                src="https://static.wikia.nocookie.net/palworld/images/0/01/Lamball_menu.png/revision/latest/scale-to-width-down/40?cb=20240121195729"
                decoding="async"
                loading="lazy"
                width="40"
                height="40"
                data-image-name="Lamball menu.png"
                data-image-key="Lamball_menu.png"
                data-relevant="1"
            /></a>
          </div>
        </div>
      </td>
      <td style="text-align: center">
        <a href="/wiki/Lamball" title="Lamball">Lamball</a>
      </td>
      <td colspan="2" style="text-align: center">
        <span style="white-space: nowrap"
          ><a href="/wiki/Neutral" title="Neutral"
            ><img
              alt="Neutral icon"
              src="https://static.wikia.nocookie.net/palworld/images/1/14/Neutral_icon.png/revision/latest/scale-to-width-down/24?cb=20240121142950"
              decoding="async"
              loading="lazy"
              width="24"
              height="24"
              data-image-name="Neutral icon.png"
              data-image-key="Neutral_icon.png"
              data-relevant="0"
          /></a>
          <a href="/wiki/Neutral" title="Neutral">Neutral</a></span
        >
      </td>
    </tr>
    <tr>
    <td style="text-align:center;">003
    </td>
    <td width="15%"><div class="center"><div class="floatnone"><a href="/wiki/Chikipi" title="Chikipi"><img alt="Chikipi menu" src="https://static.wikia.nocookie.net/palworld/images/f/f4/Chikipi_menu.png/revision/latest/scale-to-width-down/40?cb=20240121201334" decoding="async" loading="lazy" width="40" height="40" data-image-name="Chikipi menu.png" data-image-key="Chikipi_menu.png" data-relevant="1" data-src="https://static.wikia.nocookie.net/palworld/images/f/f4/Chikipi_menu.png/revision/latest/scale-to-width-down/40?cb=20240121201334" class=" ls-is-cached lazyloaded"></a></div></div>
    </td>
    <td style="text-align:center;"><a href="/wiki/Chikipi" title="Chikipi">Chikipi</a>
    </td>
    <td colspan="2" style="text-align:center;"><span style="white-space: nowrap"><a href="/wiki/Neutral" title="Neutral"><img alt="Neutral icon" src="https://static.wikia.nocookie.net/palworld/images/1/14/Neutral_icon.png/revision/latest/scale-to-width-down/24?cb=20240121142950" decoding="async" loading="lazy" width="24" height="24" data-image-name="Neutral icon.png" data-image-key="Neutral_icon.png" data-relevant="0" data-src="https://static.wikia.nocookie.net/palworld/images/1/14/Neutral_icon.png/revision/latest/scale-to-width-down/24?cb=20240121142950" class=" ls-is-cached lazyloaded"></a> <a href="/wiki/Neutral" title="Neutral">Neutral</a></span>
    </td></tr>
  </tbody>
  <tfoot></tfoot>
</table>

    `;
    const $ = cheerio.load(html);

    const index = [];
    $('table.fandom-table tbody tr').each((_, element) => {
        const href = $(element).find('a').first().attr('href');
        if (href) {
            index.push(href);
        }
    });

    const pagesResponses = await Promise.all(
        index.map((link) => fetch(`${baseUrl}${link}`)),
    );
    const pagesHtmls = await Promise.all(
        pagesResponses.map((response) => response.text()),
    );

    const pals = [];
    pagesHtmls.forEach((pageHtml) => {
        const $page = cheerio.load(pageHtml);

        const name = $page('.mw-page-title-main').text().trim();
        const number = parseInt(
            $page('[data-source="no"] div.pi-data-value')
                .text()
                .trim()
                .slice(1),
        );
        pals.push({ name, number });
    });

    console.log(pals);
    process.exit(0);
}

main();
