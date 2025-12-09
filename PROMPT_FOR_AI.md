# Essay Template - AI Configuration Guide

Use this prompt with Claude or another AI to generate essay configurations for your students.

## How to Use

1. Copy the prompt below
2. Paste it into Claude (or similar AI)
3. Replace the [BRACKETED SECTIONS] with your specific requirements
4. The AI will generate an `essay.js` file ready to use

---

## THE PROMPT

```
I need you to create an essay writing configuration for a guided essay template. The template helps students write essays paragraph by paragraph, with AI feedback after each section.

## Essay Details

**Subject:** [e.g., English Literature]
**Year Group:** [e.g., Year 9 / Grade 8]
**Essay Question/Title:** [e.g., "How does Shakespeare present the theme of ambition in Macbeth?"]

**Number of Paragraphs:** [e.g., 7 - intro, 5 body, conclusion]

**Context/Text Being Studied:** [e.g., Macbeth by William Shakespeare - a Scottish general who receives a prophecy that he will become king...]

**Key Themes to Cover:**
- [Theme 1]
- [Theme 2]
- [Theme 3]

**Important Quotations Students Should Use:**
- "[Quote 1]" - context
- "[Quote 2]" - context
- "[Quote 3]" - context

**Assessment Criteria Weightings:**
- Content/Understanding: [e.g., 30%]
- Analysis of Language: [e.g., 30%]
- Structure: [e.g., 20%]
- Written Expression: [e.g., 20%]

## Special Requirements
[Any specific requirements, e.g., must use PEE/PEEL structure, focus on Victorian context, etc.]

---

Please generate a complete `essay.js` configuration file in this format:

window.ESSAY_CONFIG = {
  title: "...",
  subject: "...",
  yearGroup: "...",
  essayTitle: "...",
  instructions: "...",
  maxAttempts: 3,
  minWordsPerParagraph: 80,
  targetWordsPerParagraph: 120,
  teacherPassword: "teacher123",
  
  paragraphs: [
    {
      id: 1,
      title: "Introduction",
      type: "introduction",
      learningMaterial: `
## Section heading
Detailed guidance with:
- Bullet points
- **Bold** for emphasis
- Key vocabulary
- Suggested approaches
      `,
      writingPrompt: "Clear instruction for what to write",
      keyPoints: [
        "What AI should look for when grading",
        "Another key point",
        "Another key point"
      ],
      exampleQuotes: ["Quote 1", "Quote 2"],
      points: 10
    },
    // ... more paragraphs
  ],
  
  gradingCriteria: {
    content: { weight: 30, description: "..." },
    analysis: { weight: 30, description: "..." },
    structure: { weight: 20, description: "..." },
    expression: { weight: 20, description: "..." }
  }
};

Make the learning material detailed and helpful, with specific quotes, techniques to discuss, and clear guidance for each paragraph type (introduction, body, conclusion).
```

---

## Example Essay Topics

### English Literature
- Character analysis (Scrooge, Macbeth, Inspector Goole)
- Theme exploration (power, guilt, social responsibility)
- Writer's methods and techniques
- Comparison essays (two characters, two poems)

### History
- Cause and consequence essays
- Significance assessments
- Source analysis essays
- Change and continuity

### Science
- Explanation essays (how/why something works)
- Evaluation of evidence
- Ethical discussions
- Compare and contrast (e.g., renewable vs fossil fuels)

### Geography
- Case study analysis
- Evaluation of strategies
- Impact assessments
- Decision-making exercises

---

## Customisation Tips

### Adjusting Difficulty
- **Easier:** More detailed learning material, more example quotes, lower word counts
- **Harder:** Less scaffolding, higher word counts, more complex analysis expected

### Adjusting Length
- **Short essay (5 paragraphs):** Intro, 3 body, conclusion
- **Standard essay (7 paragraphs):** Intro, 5 body, conclusion
- **Extended essay (9+ paragraphs):** Multiple themes, deeper analysis

### Key Points for AI Grading
Be specific about what you want the AI to look for:
- ✅ "Uses at least one quotation with embedded analysis"
- ✅ "Explains the effect on the reader"
- ✅ "Links back to the question"
- ❌ "Good analysis" (too vague)
- ❌ "Well written" (too vague)

---

## After Generation

1. Save the generated content as `config/essay.js`
2. Update `config/theme.js` if you want different colours/fonts
3. Test the essay flow locally
4. Deploy to Netlify

Remember to set the `ANTHROPIC_API_KEY` environment variable in Netlify for AI grading to work.
