// ============================================
// ESSAY CONFIGURATION
// ============================================
// This file configures your essay writing assignment.
// The AI will generate this based on your essay topic.
// ============================================

window.ESSAY_CONFIG = {
  // Basic Information
  title: "A Christmas Carol - Character Analysis Essay",
  subject: "English Literature",
  yearGroup: "Year 9",
  
  // Essay metadata
  essayTitle: "How does Dickens present Scrooge's transformation in 'A Christmas Carol'?",
  
  // Instructions shown to students
  instructions: "In this guided essay, you will write a structured analysis of Scrooge's character transformation. Each section will guide you through a different aspect of the essay. Take your time with each paragraph - you'll have up to three attempts to refine your writing based on AI feedback.",
  
  // How many revision attempts per paragraph (2-3 recommended)
  maxAttempts: 3,
  
  // Minimum word count per paragraph (0 to disable)
  minWordsPerParagraph: 80,
  
  // Target word count per paragraph (shown as guidance)
  targetWordsPerParagraph: 120,
  
  // Teacher dashboard password
  teacherPassword: "teacher123",
  
  // ============================================
  // ESSAY STRUCTURE
  // ============================================
  // Each paragraph has:
  // - id: Unique identifier
  // - title: Short title for progress tracker
  // - type: "introduction", "body", or "conclusion"
  // - learningMaterial: Context and guidance for the student
  // - writingPrompt: Specific instruction for what to write
  // - keyPoints: Things the AI should look for when grading
  // - exampleQuotes: Suggested quotes to use (optional)
  // - points: How many marks this paragraph is worth
  // ============================================
  
  paragraphs: [
    // ==========================================
    // INTRODUCTION
    // ==========================================
    {
      id: 1,
      title: "Introduction",
      type: "introduction",
      learningMaterial: `
## Writing Your Introduction

Your introduction should:
- **Hook the reader** with an engaging opening statement about transformation or redemption
- **Introduce the text** - mention Dickens and 'A Christmas Carol' (1843)
- **Address the question** - show you understand what's being asked about Scrooge's transformation
- **Outline your argument** - briefly preview the main points you'll make

### Context to Consider
Charles Dickens wrote 'A Christmas Carol' in 1843, during the Victorian era when there was a huge divide between rich and poor. The novella was partly a social commentary on the treatment of the poor.

### Key Vocabulary
Consider using: transformation, redemption, miserly, benevolent, catalyst, moral awakening
      `,
      writingPrompt: "Write your introduction paragraph. Hook the reader, introduce the text and question, and briefly outline how you will argue that Dickens presents Scrooge's transformation.",
      keyPoints: [
        "Engaging opening hook",
        "Mentions Dickens and the novella by name",
        "Clearly addresses the question about transformation",
        "Previews the argument structure",
        "Appropriate academic tone"
      ],
      points: 10
    },
    
    // ==========================================
    // BODY PARAGRAPH 1
    // ==========================================
    {
      id: 2,
      title: "Scrooge at the Start",
      type: "body",
      learningMaterial: `
## Scrooge's Character at the Beginning

Before exploring the transformation, you need to establish what Scrooge is like at the start of the novella.

### Key Quotations
- **"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"** - Shows his miserly nature
- **"Hard and sharp as flint"** - Simile emphasising his cold, unyielding character
- **"solitary as an oyster"** - Suggests isolation and self-containment
- **"The cold within him froze his old features"** - Internal coldness reflected externally

### Techniques to Discuss
- **Semantic field of coldness** - Dickens repeatedly associates Scrooge with cold imagery
- **Listing/accumulation** - The opening description piles up negative traits
- **Pathetic fallacy** - Weather reflects his inner state

### Paragraph Structure (PEEL)
- **P**oint: What aspect of Scrooge are you focusing on?
- **E**vidence: Which quotation supports this?
- **E**xplain: How does the language create this impression?
- **L**ink: How does this connect to transformation/the question?
      `,
      writingPrompt: "Write a paragraph analysing how Dickens presents Scrooge at the beginning of the novella. Use at least one quotation and analyse the language techniques Dickens uses.",
      keyPoints: [
        "Clear topic sentence about initial characterisation",
        "Includes relevant quotation(s)",
        "Analyses language techniques (not just identifies)",
        "Explains effect on reader",
        "Links back to transformation/question"
      ],
      exampleQuotes: [
        "Hard and sharp as flint",
        "solitary as an oyster",
        "The cold within him froze his old features"
      ],
      points: 15
    },
    
    // ==========================================
    // BODY PARAGRAPH 2
    // ==========================================
    {
      id: 3,
      title: "Ghost of Christmas Past",
      type: "body",
      learningMaterial: `
## The Ghost of Christmas Past - Beginning of Change

The Ghost of Christmas Past shows Scrooge memories from his youth and early adulthood. This is the first stage of his transformation.

### Key Moments
- Scrooge sees himself as a **lonely schoolboy** - abandoned at Christmas
- He remembers his **sister Fan** with genuine emotion
- He witnesses his **younger self with Belle** and their broken engagement
- Belle tells young Scrooge: **"Another idol has displaced me... a golden one"**

### Key Quotations
- **"A solitary child, neglected by his friends"** - Explains origins of his isolation
- **"His face had not the harsh and rigid lines of later years"** - Shows he wasn't always cold
- **"Spirit! Remove me from this place"** - Scrooge is emotionally affected

### What to Analyse
- How does revisiting the past begin Scrooge's emotional awakening?
- What do we learn about WHY Scrooge became the way he is?
- How does Dickens show Scrooge's emotional reaction?
      `,
      writingPrompt: "Write a paragraph analysing how the Ghost of Christmas Past begins Scrooge's transformation. Focus on how revisiting his memories affects him emotionally and what we learn about the origins of his character.",
      keyPoints: [
        "Focuses on the role of memory/the past",
        "Includes relevant quotation(s)",
        "Shows understanding of cause and effect",
        "Analyses Scrooge's emotional response",
        "Connects to overall transformation arc"
      ],
      exampleQuotes: [
        "A solitary child, neglected by his friends",
        "Spirit! Remove me from this place",
        "Another idol has displaced me"
      ],
      points: 15
    },
    
    // ==========================================
    // BODY PARAGRAPH 3
    // ==========================================
    {
      id: 4,
      title: "Ghost of Christmas Present",
      type: "body",
      learningMaterial: `
## The Ghost of Christmas Present - Seeing Others

This spirit shows Scrooge how others live and celebrate Christmas in the present day, including the Cratchit family.

### Key Moments
- The **Cratchit family dinner** - joy despite poverty
- **Tiny Tim** - "God bless us, every one!"
- The spirit reveals **Ignorance and Want** - children representing society's problems
- Scrooge asks **"Are there no prisons? Are there no workhouses?"** thrown back at him

### Key Quotations
- **"Spirit, tell me if Tiny Tim will live"** - Shows growing empathy
- **"They are Man's... This boy is Ignorance. This girl is Want"** - Social message
- Bob Cratchit toasts Scrooge as **"the Founder of the Feast"** despite everything

### What to Analyse
- How does seeing the Cratchits change Scrooge?
- What is the significance of Tiny Tim to Scrooge's transformation?
- How does Dickens use this spirit to deliver social commentary?
      `,
      writingPrompt: "Write a paragraph analysing how the Ghost of Christmas Present furthers Scrooge's transformation. Focus on his growing empathy, particularly in relation to the Cratchit family and Tiny Tim.",
      keyPoints: [
        "Discusses the present and its impact on Scrooge",
        "Includes quotation with analysis",
        "Shows understanding of empathy development",
        "May reference social commentary",
        "Connects to transformation journey"
      ],
      exampleQuotes: [
        "Spirit, tell me if Tiny Tim will live",
        "God bless us, every one!",
        "This boy is Ignorance. This girl is Want"
      ],
      points: 15
    },
    
    // ==========================================
    // BODY PARAGRAPH 4
    // ==========================================
    {
      id: 5,
      title: "Ghost of Christmas Yet to Come",
      type: "body",
      learningMaterial: `
## The Ghost of Christmas Yet to Come - The Final Warning

This silent, terrifying spirit shows Scrooge a possible future - his own death, unmourned and forgotten.

### Key Moments
- People **laugh and celebrate** an unnamed man's death
- His possessions are **stolen and sold** by thieves
- His **grave** - neglected and alone
- Tiny Tim has **died** in this future
- Scrooge pleads: **"I will honour Christmas in my heart"**

### Key Quotations
- **"The phantom slowly, gravely, silently approached"** - Creates fear
- **"Before I draw nearer to that stone... answer me one question. Are these the shadows of the things that Will be, or are they shadows of things that May be, only?"** - Hope for change
- **"I will not shut out the lessons that they teach!"** - Commitment to transformation

### What to Analyse
- How does fear function as a catalyst for change?
- Why is this spirit the most effective?
- How does Dickens create tension and horror?
      `,
      writingPrompt: "Write a paragraph analysing how the Ghost of Christmas Yet to Come completes Scrooge's transformation. Consider how Dickens uses fear and the possibility of change to drive Scrooge's moral awakening.",
      keyPoints: [
        "Discusses the future/consequences",
        "Analyses how fear motivates change",
        "Includes relevant quotation with analysis",
        "Shows understanding of the transformation's climax",
        "May discuss Dickens' technique (silence, imagery)"
      ],
      exampleQuotes: [
        "Are these the shadows of things that Will be, or... May be?",
        "I will honour Christmas in my heart",
        "I will not shut out the lessons that they teach"
      ],
      points: 15
    },
    
    // ==========================================
    // BODY PARAGRAPH 5
    // ==========================================
    {
      id: 6,
      title: "The Transformed Scrooge",
      type: "body",
      learningMaterial: `
## Scrooge's Redemption - Stave Five

The final stave shows us the transformed Scrooge on Christmas morning and beyond.

### Key Moments
- Scrooge wakes **joyful and laughing** - complete contrast to Stave One
- He **sends a turkey** to the Cratchits anonymously
- He **gives money to charity** collectors
- He **joins Fred's Christmas dinner**
- He **raises Bob's salary** and helps Tiny Tim

### Key Quotations
- **"I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy"** - Listing shows overwhelming joy
- **"He became as good a friend, as good a master, and as good a man, as the good old city knew"** - Transformed reputation
- **"Scrooge was better than his word"** - Actions prove change is genuine

### What to Analyse
- How does Dickens show the completeness of transformation?
- How do language and structure in Stave Five contrast with Stave One?
- Why does Dickens emphasise that the change is lasting?
      `,
      writingPrompt: "Write a paragraph analysing how Dickens presents the transformed Scrooge in Stave Five. Consider how language, imagery, and Scrooge's actions demonstrate the completeness of his redemption.",
      keyPoints: [
        "Contrasts with opening characterisation",
        "Includes quotation showing transformation",
        "Analyses language techniques (listing, contrast)",
        "Discusses lasting nature of change",
        "May reference Dickens' message/purpose"
      ],
      exampleQuotes: [
        "I am as light as a feather, I am as happy as an angel",
        "as good a friend, as good a master, and as good a man",
        "Scrooge was better than his word"
      ],
      points: 15
    },
    
    // ==========================================
    // CONCLUSION
    // ==========================================
    {
      id: 7,
      title: "Conclusion",
      type: "conclusion",
      learningMaterial: `
## Writing Your Conclusion

Your conclusion should:
- **Summarise your argument** - bring together your main points
- **Answer the question directly** - how DOES Dickens present the transformation?
- **Offer a final insight** - why does this matter? What is Dickens' message?
- **End memorably** - a strong final sentence

### Things to Mention
- The **journey structure** - Past, Present, Future as a moral journey
- **Dickens' techniques** - contrast, imagery, characterisation
- **Dickens' purpose** - social commentary, moral message, hope for change
- **Relevance** - why this message still resonates today

### What NOT to Do
- Don't introduce new evidence or quotations
- Don't just repeat your introduction
- Don't end with "In conclusion..." (find a more sophisticated way)
      `,
      writingPrompt: "Write your conclusion. Summarise how Dickens presents Scrooge's transformation, highlight the key techniques he uses, and explain the significance of this transformation for Dickens' message.",
      keyPoints: [
        "Summarises main argument coherently",
        "Directly addresses the question",
        "References key techniques/methods",
        "Shows understanding of Dickens' purpose",
        "Ends with strong final statement"
      ],
      points: 15
    }
  ],
  
  // ============================================
  // GRADING CRITERIA
  // ============================================
  // These are used by the AI when providing feedback
  // Adjust the weightings to match your assessment criteria
  gradingCriteria: {
    content: {
      weight: 30,
      description: "Understanding of text, relevant evidence, addressing the question"
    },
    analysis: {
      weight: 30,
      description: "Analysis of language, structure, and techniques; explanation of effects"
    },
    structure: {
      weight: 20,
      description: "Clear paragraph structure, logical flow, cohesive argument"
    },
    expression: {
      weight: 20,
      description: "Academic vocabulary, spelling, punctuation, grammar"
    }
  }
};
