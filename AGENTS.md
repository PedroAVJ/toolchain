# Repository guidance

- This repository is the canonical source for the `toolchain` plugin.
- Keep the Codex and Claude manifests synchronized when both are present. The Claude plugin is intentionally absent for Codex-only plugins.
- Marketplace catalogs reference this repository; do not duplicate runtime behavior back into a marketplace repository.
- Keep credentials and personal data out of Git. Preserve stable command names, service labels, and credential identifiers across releases.
- Bump the plugin version for released behavior changes and run `npm test` before publishing.
- Brief owns the shared format and independent style; business, product, software, and implementation remain distinct. Keep client-specific records and evidence out of this public plugin.
- Preserve useful stage interfaces without imposing legacy templates on briefs. Keep revisions and source registries internal and stakeholder sign-off evidence-based.
