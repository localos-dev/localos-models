# Contributing to the LocalOS model catalog

The model catalog lives in models.json. Each entry describes one MLC-compatible model that LocalOS can load and run entirely in the browser.

## Who can contribute

Anyone can open a pull request to add or update a model. You do not need to be affiliated with LocalOS.

## Requirements for a new model entry

Before adding a model, confirm all of the following:

1. The model is published on the MLC community or official model registry and has a stable MLC model ID.
2. The model runs in-browser via WebLLM without requiring native code.
3. You have tested the model ID by loading it in LocalOS at localos.xyz/app and confirming it downloads and responds correctly.
4. All fields in the entry are accurate: vramMB, contextTokens, category, and description.

## How to add a model

1. Fork this repository.
2. Open models.json and add your entry to the models array. Follow the existing format exactly.
3. Validate your entry against schema.json. You can use any JSON Schema validator.
4. Open a pull request with a title like: "add Llama 3.2 1B Instruct q8"
5. In the pull request body, include the MLC model page link and a brief note about why the model is useful.

## Entry format

Each model entry must include all required fields. No additional fields are allowed.

    id             The exact MLC model ID used to load the model with WebLLM.
    name           Short display name shown in the LocalOS UI (for example: Llama 3.2 1B).
    family         Model family: Llama, Qwen, Gemma, Phi, Mistral, Hermes, or the actual family name.
    vramMB         Approximate memory required in megabytes. Round to the nearest whole number.
    contextTokens  Maximum context window in tokens as reported by the model card.
    category       One of: nano, small, medium, large. See the size ranges in schema.json.
    tags           Array of strings. Valid tags: recommended, coding, multilingual, reasoning. Use an empty array if none apply.
    description    One or two plain English sentences describing the model. No symbols, no emoji, no markdown.

## Description rules

Descriptions appear directly in the LocalOS UI. They must follow these rules:

- Plain English only. No emoji, no arrows, no checkmarks, no dashes used as bullets.
- No mention of "Ollama" or any runtime-specific tool. The description is about the model itself.
- No superlatives like "best" or "only" without factual backing.
- Keep it under 120 characters.

## Category size ranges

    nano      under 1 GB VRAM
    small     1 GB to 2.5 GB VRAM
    medium    2.5 GB to 4.5 GB VRAM
    large     4.5 GB and up VRAM

## Updating an existing entry

If a model has a new version or you found an inaccurate field, open a pull request with the corrected values and include a brief explanation of what changed and why.

## Questions

Open a GitHub issue or post on the LocalOS community at localos.xyz/community.
