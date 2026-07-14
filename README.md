# All-Star Collision Repair Codex Website

Editable static replacement site for `allstarautocollision.com`.

## Stack

This follows the same general style as `better-beds-website`: plain static HTML, CSS, and JavaScript with a `CNAME`, `robots.txt`, and `sitemap.xml`. It is simple to edit by agents and can be hosted with GitHub Pages or any static web host.

## Local preview

```bash
python3 -m http.server 4174
```

Then open:

```text
http://localhost:4174
```

## Deployment path

Recommended setup, matching the Better Beds static-site approach:

1. Create a GitHub repo named `allstar-codex-website` under `ccraig78`.
2. Push this folder to that repo.
3. Enable GitHub Pages from the default branch root.
4. Keep `CNAME` set to `allstarautocollision.com`.
5. In Durable-managed DNS or the domain DNS provider, point:
   - `www` to `<github-user>.github.io` with a `CNAME`.
   - Apex/root `allstarautocollision.com` to GitHub Pages A records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - If IPv6 is used, add GitHub Pages AAAA records from GitHub's current docs.
6. In GitHub Pages, enable HTTPS after DNS resolves.

Codex cannot change Durable DNS settings directly, but this deployment can provide the DNS targets Clint will need.

## Contact form note

The quote form currently posts to Formspree:

```text
https://formspree.io/f/xdaqklnb
```

Photo upload is intentionally handled by text/email links so customers can attach images from their phone without requiring a backend.

## Business details extracted from current site

- Business name: All-Star Collision Repair
- Phone: 682-430-4530
- Address: 3123 Cartwright St, Dallas, Texas 75212
- Services/facts: collision repair, insurance or self-pay customers, financing, choice of certified OEM parts or insurance-certified aftermarket parts, standard one-year warranty on repairs, extended warranties may be offered case by case, free onsite quotes.
- Email: `allstarcollisionrepair1@gmail.com`
