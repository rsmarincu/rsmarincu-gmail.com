<template>
  <div class="about">
    <v-container>
      <v-row wrap align="center">
        <v-col class="pt-16 xs-4 md-6">
          <h1 class="font-weight-black">Towards democartizing data science.</h1>
          <p class="font-weight-medium">Data science is one of the most in-demand fields at the moment. As data made headlines in recent years, people and companies are becoming more aware of the data they produce and how important it is. This paper builds on previous work on low code systems, data visualisation and automated machine learning and proposes a novel way of manipulating and processing data. The scope of this research project is to democratize data science by designing and developing
an interactive web application that utilises visual scripting to produce workflows
rather than programming. This takes form as a web application named Fluxus, aiming to democratize data science by introducing a low code system which produces workflows.
            </p>
        </v-col>
        <v-col class="pt-5 xs-4 md-6">
          <img src="@/assets/undraw_data_reports_706v.svg" height="350px" align="center" justify="center">
        </v-col>
      </v-row>
    </v-container>

    <v-container>
        <v-row wrap align="center">
            <v-col class="xs-4 md-6" >
                <img src="@/assets/undraw_questions_75e0.svg" height="350px">
            </v-col>
            <v-col class="xs-4 md-6">
                <h2>The problem</h2>
                <p>It is argued that knowledge extraction from information is a key competitive advantage (Big data: The next frontier for innovation, competition, and
productivity — McKinsey, 2011). Moreover, data technology adoption is a necessity for survival. Forrester states that between 60% and 70% of data within
a company is unused (Gualtieri, 2020). One of the reasons for this is that companies need specialised data science teams that have the required knowledge
of how to make it valuable. In order to gain significant results and insights
from data, advanced knowledge of statistics combined with domain expertise
is essential (Shang et al., 2019a). To make data science accessible for anyone,
we need to design new frameworks that fundamentally change the way we
interact with data (Kraska, 2018a). This problem requires innovative, valuedriven solutions where the technical side is joined by the business (Cavanillas,
Curry, and Wahlster, 2016). Now that everybody is becoming more aware of
the power data can unleash, questions such as ”Can my data help me achieve
something I could not before?” (Cao, 2017). To answer this question, a strong
set of foundations adapted from several fields including statistics, mathematics, social science and computer science is needed. A typical workflow that
involves data looks like this:
Data acquisition → Data processing → Modelling → Deployment → Monitoring
A data scientist would have the aforementioned skills and apply them using
tools such as Python, R, Tableau, SQL etc. Unfortunately, there is a big
gap in the demand for data scientists and the available talent. Even though
the world is adopting data as fast as possible, it is being slowed down by the
limited talent. It seems that this gap is caused by both the necessary skills
in order to interact with data and by the way the interactions occurs. This
poses the initial investigative question:</p>

        </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row align="center" justify="center">
            <h3 class="font-italic font-weight-bold">How can we gain knowledge from data when traditional data science skills
are missing?
             </h3>
        </v-row>
    </v-container>

    <v-container>
        <v-row wrap align="center">
            <v-col class="xs-4 md-6">
                <h2>The solution</h2>
                <p>Breaking down the problem into its two main parts, we first look at how we
can change the way we currently work with data, which is through computers.
However, computers do not understand human language or numbers, they rely
on binary code to read, write and process information. Writing binary code is
very difficult, which is why we created assembly languages, which further got
abstracted into low-level languages and next into high-level languages. Today,
data scientists use these languages in order to manipulate and process data.
This paper argues that a further level of abstraction, namely from high-level
languages to low code platforms, will allow a new group of users to interact
with data. Some of the key aspects that need to be considered while designing
such a system are:
                </p>
                <ol>
                    <li> 
                    <span class="font-weight-bold">Interactivity.</span>
                    Any action performed needs to have a response time
that is lower than 1 second. Anything more than that will result in the
user becoming impatient 
                    </li>
                    <li><span class="font-weight-bold">Immersion.</span> While using the system, the user needs to stay focused on
his task and not be distracted by other factors such as the user interface.
                    </li>
                    <li><span class="font-weight-bold">Intuitive tools.</span>
                 Each tool and element in the system should have an
easily identifiable graphic icon accompanied by a suggestive name.
                    </li>
                </ol>
                <p>The above mentioned will manifest under the form of a canvas where the
user can perform drag and drop actions on various tools and elements. By
connecting them using virtual wires, the user can create workflows for specific tasks. For example, a small business owner could use his sale records and
predict what item may sell in the upcoming months in order to prepare and
stock that item. In bigger companies, data scientists can collaborate with
business analysts to create compelling stories and visuals in order to persuade
a client.
Addressing the second part of the problem requires research into how automated machine learning can help with filling the missing skills of users. In
an optimal scenario, users should be able to predict the desired label from
their dataset. Some of the existing solutions come from open source projects:
Auto-Sklearn (Auto-Sklearn, 2020), Auto-WEKA (Auto-Weka, 2020), MLbox
(MLBox , 2020), Auto-Keras (AutoKeras, 2020); and some come from big corporations: Google Cloud AutoML (Google Cloud AutoML, 2020), Microsoft
Azure AutoML (Microsoft Azure AutoML, 2020), Amazon SageMaker Autopilot (Amazon Sagemaker Autopilot, 2020). For this project, Auto-Sklearn and
will be compared with a new proposed workflow, which will be detailed in
section 3.
Taking into consideration the aforementioned, the question this paper answers
becomes:</p>

        </v-col>
        <v-col class="xs-4 md-6" align="center" justify="center">
            <img src="@/assets/undraw_problem_solving_ft81.svg" height="350px">
        </v-col>
        </v-row>
    </v-container>
    
    <v-container>
        <v-row align="center" justify="center">
            <h3 class="font-italic font-weight-bold">
”Can a low code data science platform allow a user to achieve similar results
to a typical data science workflow? Moreover, can he do it with little
knowledge of data science?”
            </h3>
        </v-row>
    </v-container>
  </div>
</template>
