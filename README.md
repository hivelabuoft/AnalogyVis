# 📊 Visualization Analogies Study

This repository contains materials related to our study on visualization analogies, including charts, datasets, analysis scripts, participant sketches, and survey questions.

Associated with the paper: [**From Reality to Recognition: Evaluating Visualization Analogies for Novice Chart Comprehension.**](https://osf.io/preprints/osf/up6e5_v1)

---

## 📁 Repository Structure

### 1️⃣ `analogyCharts/`
This folder contains the analogy and baseline charts we presented in the paper and used in the Qualtrics survey.

#### Example Images:
- **Analogy Chart:**  
  ![Waterfall Analogy Chart](https://github.com/hivelabuoft/AnalogyVis/blob/main/analogyCharts/Waterfall/WaterfallA.png?raw=true)

- **Baseline Chart:**  
  ![Waterfall Baseline Chart](https://github.com/hivelabuoft/AnalogyVis/blob/main/analogyCharts/Waterfall/WaterfallB.png?raw=true)

For more analogy charts, visit our website: [Visualization Analogies](https://visanalogy.github.io/visualization-analogies/)

---

### 2️⃣ `baselineCharts/`
- Contains **detailed JSON files** for chart creation dataset and **D3.js code** for the creation of baseline charts.

---

### 3️⃣ `dataAnalysis/`
This folder holds **de-identified datasets** collected from our study.

#### 📌 Key Files:
- `performanceAnalysis.csv` → Contains visualization novices' scores.
- `128.csv` → Includes VARK questionnaires, self-rated preferences, NASA-TLX data, and more from **128 participants**.
- `data.ipynb` → Used to analyze participant ratings.
- `performance.ipynb` → Used to analyze participant performance.

#### 🏷️ `Scripts to View Participant Sketches`
Create `\annotation` folder under `dataAnalysis/`
To view the images of sketches, run:
```bash
python extract_image.py
python overlay_images.py
```
After running the scripts, `\annotation` contains **participant sketches**. 
📌 **Note:** You may need to change `sketch_dir=` in `extract_image.py` (line 48) to the local `finalSketch` path. You can download the finalSketch folder and unzip it under `dataCollected/participantsSketches/finalSketch.zip/`

For convenience, you can also view the selected overlayed sketches in the `dataCollected/` folder.
---

### 4️⃣ `dataCollected/`
This folder holds **example participant sketches** that are already overlayed from the previous step and de-identified think-aloud audio transcriptions.

#### Example Sketch:
![Participant Histogram Sketch](https://github.com/hivelabuoft/AnalogyVis/blob/main/dataAnalysis/R_2TpcU74aCOHhhfD_signature.png_analogy_composite.png?raw=true)

Due to file size limitations, download and unzip `selectedSketches.zip` to access the selected participant's dataset.

#### 🔊 `think-aloud/PhonicAudioData/`
- Contains **de-identified transcriptions** of think-aloud audio data.
- Each CSV file corresponds to a chart used in the study.



### 5️⃣ `expertReviews/`
# 📝 Expert Reviews Data

This folder contains data related to expert reviews conducted as part of our study. The expert evaluations focus on assessing candidate visualizations based on predefined design criteria.


## 📁 Files in This Folder

#### `expertRawData.csv`
- Contains the **raw data** of expert reviews.
- Includes expert comments on **each of the four design criteria** for all **10 candidate charts**.

#### `expertSummary.csv`
- Summarizes expert feedback on which charts require **modifications** or **refinements**.
- Includes **reasons** provided by experts for suggested changes.

#### `expertEvaluationCriteria.pdf`
- Contains the **rubric** used by experts to rate visualizations.
- Ratings are based on a **scale from 1 to 5**.

---

### 6️⃣ `surveyQuestions/`
Includes the **question solutions, grading rubric and study questions** from Qualtrics, available in both:

## 📁 Files in This Folder

#### `Sketch_Interface/`
This folder contains JavaScript scripts for integrating a **custom sketching interface** into Qualtrics' **Signature Question** type. The interface allows participants to draw directly on charts as part of the study.

##### 🎥 Demo:
Watch a demonstration of the sketching interface in action:  
[![Sketch Interface Demo](https://img.youtube.com/vi/TUkIpmxd2Is/0.jpg)](https://youtu.be/TUkIpmxd2Is)

##### 🛠️ How to Use:
1. Upload the necessary JavaScript files into **Qualtrics' "Look & Feel" > "Custom JavaScript"** section.
2. Set the **Signature Question** to accept sketch input.
3. Link the appropriate script to the specific chart question.
4. Ensure Qualtrics settings allow participants to submit drawings along with responses.

#### `ProblemsAndRubric/`
- Solution for the study questions
- Rubric for the study questions (each out of 5)
- The folder contains .md files to each of the chart type. Each chart type is a json file in the format of Question Category, Question body, Detailed Rubric. 
For example, below is one of the question for Waterfall Chart: 
```
{
      "Category": "Summary",
      "Question": [
        "What do you think this chart is about? Can you describe what each section represents?",
        "What overall pattern or strategy do you notice in the character's journey through this chart?"
      ],
      "Answer": [
        "The chart is a depiction of a video game level. Each section or icon shows different events: Starting Point, Mushroom Boost, Goomba Attack, Coin Bonus, and Piranha Plant obstacle.",
        "The pattern shows that the character gains points from bonuses and loses points from obstacles. The strategy involves balancing the positive and negative impacts to reach the highest score."
      ],
      "Detailed Rubric": {
        "0": "No response or completely off-topic. The student fails to mention any of the key events or the overall strategy.",
        "1": "Partial identification of the chart's theme. The student may mention one event or provide a very vague description of the chart with no clear strategy.",
        "2": "Basic understanding with at least two correct event identifications. The response shows minimal detail and does not adequately explain the overall pattern or strategy.",
        "3": "Correctly identifies the main theme and at least three events. The student provides a basic explanation of the overall pattern but lacks depth or insight into the strategy.",
        "4": "Provides a comprehensive description of all main events and general purpose. The student explains most events clearly and outlines the balance between positive and negative impacts, though some details might be missing.",
        "5": "Thorough explanation including all events (Starting Point, Mushroom Boost, Goomba Attack, Coin Bonus, and Piranha Plant obstacle) along with insightful observations about the strategy and pattern. The response is detailed and demonstrates full understanding of the chart."
      }
}
```

#### `Study Question Details.qsf`
- QSF format
- For importing into Qualtrics
- Qualtrics Survey Exported Questions and Charts



