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
- Contains **detailed JSON files** and **D3.js code** for the creation of baseline charts.

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

---

### 5️⃣ `surveyQuestions/`
Includes the **rubric and study questions** from Qualtrics, available in both:
- **PDF format**
- **QSF format** (for importing into Qualtrics)

