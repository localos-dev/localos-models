# localos-models

Community-maintained catalog of compatible local models for LocalOS. Includes metadata, capabilities, download sizes, and benchmarks.

Website: https://localos.xyz
Docs: https://localos.xyz/docs
X: https://x.com/localos_xyz

---

## What this repo contains

A structured catalog of language models that work with LocalOS. Each entry includes the model name, family, maker, available parameter sizes, context window, download size, minimum RAM, and a short description of its strengths.

The catalog is used by the LocalOS Models page to populate the model browser and download options.

---

## Model families

Llama by Meta. General purpose, strong reasoning and code. Sizes from 1B to 70B parameters.

Mistral by Mistral AI. Fast inference, strong multilingual support. Sizes from 7B to 8x7B.

Gemma by Google. Efficient on low RAM hardware, good for devices with 4 to 8 GB RAM. Sizes from 2B to 27B.

Qwen by Alibaba. Strong multilingual output and code generation. Sizes from 3B to 72B.

Phi by Microsoft. Capable at small sizes, works well on devices with limited RAM. Sizes from 3.8B to 14B.

Hermes by NousResearch. Tuned for agent workflows and tool use. Sizes from 8B to 70B.

---

## Catalog format

Each model entry follows this structure:

```json
{
  "id": "llama3.2:1b",
  "family": "llama",
  "name": "Llama 3.2 1B",
  "maker": "Meta",
  "parameters": "1B",
  "contextWindow": 128000,
  "downloadSizeGB": 0.7,
  "minRamGB": 4,
  "strengths": ["general", "fast"],
  "description": "The smallest Llama 3.2 model. Good for quick questions on low-resource hardware."
}
```

---

## Contributing

To add a model or correct an entry, open a pull request with the updated catalog JSON. Include the source for any benchmark numbers cited.

---

## Links

Main app: https://github.com/localos-dev/localos
Docs: https://github.com/localos-dev/localos-docs
Website: https://localos.xyz
X: https://x.com/localos_xyz
