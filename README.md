# localos-models

Community-maintained catalog of compatible local models for LocalOS. Includes metadata, capabilities, context window size, and pricing tier.

Website: https://localos.xyz
Docs: https://localos.xyz/docs
X: https://x.com/localos_xyz

---

## What this repo contains

A structured catalog of language models that work with LocalOS. Each entry includes the model ID, name, family, VRAM requirement, context window size, category, tags, and a short description.

The catalog is exported as models.json and used by the LocalOS Models page to populate the model browser and payment flow.

---

## Model access

Models under 2 GB are free. No wallet or payment required.

Larger models require a one-time USDC payment on Base. Pricing tiers:

| Tier | Model size | Price |
|---|---|---|
| Free | Under 2 GB | Free |
| Small | 2 to 3 GB | 15 USDC |
| Medium | 3 to 4 GB | 20 USDC |
| Large | 4 GB and above | 25 USDC |

Payment is per wallet per model. No subscription. Once paid, the model is unlocked permanently for that wallet.

---

## Model families

Llama by Meta. General purpose, strong reasoning and code. Sizes from 1B to 8B parameters in this catalog.

Qwen by Alibaba. Strong multilingual output and code generation. Includes Qwen 2.5 and Qwen 2.5 Coder variants. Sizes from 1.5B to 7B.

Gemma by Google. Efficient on low RAM hardware, good for devices with 4 to 8 GB RAM. Sizes from 2B to 9B.

Phi by Microsoft. Capable at small sizes, works well on devices with limited RAM. Sizes from 3.4B to 3.6B.

Mistral. Fast inference, strong multilingual support. Includes Ministral 3B and Mistral 7B.

Hermes by Nous Research. Tuned for agent workflows and tool use. Built on Llama and Mistral base models.

---

## Catalog format

Each model entry follows this structure:

```json
{
  "id": "Llama-3.2-1B-Instruct-q4f32_1-MLC",
  "name": "Llama 3.2 1B",
  "family": "llama",
  "vramMB": 879,
  "contextTokens": 8192,
  "category": "general",
  "tags": ["fast", "lightweight"],
  "description": "The smallest Llama 3.2 model. Fast responses on any hardware. Good for quick questions and simple tasks."
}
```

Field reference:

| Field | Type | Description |
|---|---|---|
| id | string | MLC model ID used by WebLLM to load the model |
| name | string | Human-readable display name |
| family | string | Model family: llama, qwen, gemma, phi, mistral, hermes |
| vramMB | number | Approximate VRAM usage in megabytes |
| contextTokens | number | Maximum context window in tokens |
| category | string | Primary use: general, code, or reasoning |
| tags | string array | Capability tags, e.g. fast, multilingual, coding |
| description | string | One or two sentence description for display in the UI |

---

## Contributing

To add a model or correct an entry, open a pull request with the updated models.json. Include the MLC model ID from the WebLLM model list and a source for any benchmark or size figures cited.

---

## Links

Main app: https://github.com/localos-dev/localos
Docs: https://github.com/localos-dev/localos-docs
Smart contract: https://github.com/localos-dev/localos-contracts
Website: https://localos.xyz
X: https://x.com/localos_xyz
