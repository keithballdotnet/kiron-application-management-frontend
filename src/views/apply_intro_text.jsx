'use strict';

import React from 'react';
import {Link} from 'react-router';

export default function () {
  return (
    <div>
      <h2>Welcome to the Kiron application process!</h2>
      <p>
        Kiron is a free higher education institution. We want to provide higher education to as many people as possible, however, we are especially targeting refugees and asylum seekers - traditionally groups that have a more difficult access to higher education.

        To sign up to our courses, you will need to send one of the following documents:
      </p>
      <ol>
        <li>a residence permit (Aufenthaltserlaubnis)</li>
        <li>permission to reside (Aufenthaltsgestattung)</li>
        <li>a document that states the temporary suspension of deportation status (Duldung)</li>
        <li>the recognition of refugee status from any State;</li>
        <li>the recognition of refugee status from UNHCR</li>
        <li>a document that states subsidiary protection status</li>
        <li>a document certifying that you started your asylum application;</li>
        <li>if you live in a refugee camp, a self-certification of your residence there, signed by the camp manager, will be enough. Please note, this document does NOT have any legal status, we just need it for our internal administrative processes.</li>
        <li>In case you don’t fit into any of the above categories, please fill in <a href='https://kiron.university/storage/app/media/Application_and_Admission.pdf'>this certification</a> to be approved by a representative of a state-organization / NGO you are in contact with (e.g. social worker, counsellor, legal consultant).</li>
        <li>Please scan or take a clear picture of the document you choose and upload it through the form below. We accept documents in any European language, but if you really want to make our life easier, English is better!</li>
      </ol>
      <p>
        We will not share the document you send us with anyone else (nor with other people, nor organisations, nor governmental agencies – from any country). We only need this document for our internal administrative processes, to make sure that you qualify as a Kiron student.
        *In case 1. and 4., you will have access to our courses and to the German Staatsbibliothek (National Library), from where you can access a wealth of documents and academic papers. In the other cases, you will have access to our courses, but unfortunately you will not have access to the library for the time being. We will still provide you however with all the necessary documents and materials for your studies.
      </p>

      <h4>How to apply for the third year</h4>
      <p>
        In order to access institutions of higher education in Germany, applicants need to provide a German University entrance qualification, called Hochschulzugangsberechtigung (hereinafter referred to as HZB). This system is universal for all institutions in Germany. For all other partner universities, please check their individual requirements.
      </p>

      <h4>How to check your eligibility for bachelor degrees</h4>
      <p>
        To confirm that you are eligible to directly enter a Bachelor degree programme at a German university with your current level of educational achievements, you have to check the classification of your academic qualifications:
      </p>
      <ol>
      <li>
        Visit the database of foreign secondary school qualifications on the website of the Central Office for Foreign Education (ZAB) called anabin. This website is in German, but by following the instructions you will still be able to check your qualifications.<br/>
        Go to <a href='http://anabin.kmk.org/no_cache/filter/schulabschluesse-mit-hochschulzugang.html#land_gewaehlt'>anabin</a>.
      </li>
      <li>Select your home country or the country in which you obtained your academic qualification from the dropdown list.</li>
      <li>Find your qualification on the list and click on it. The pop-up window that now opens displays the evaluation of your qualification. ‘Direkter Zugang’ means that you do not need any further qualifications to be allowed to study in Germany.</li>
      <li>
        In certain cases, qualifications will have to be judged on an individual basis (‘Einzelfallentscheidung’). If this is the case, please contact the Jugendmigrationsdienst (JMD), which helps you in this and other queries you may have in this issue.<br/>
        <a href="http://www.jmd-portal.de/output.php?id=411&tid=411&jmdID=412">Contact the Jungendmigrationsdienst (JMD)</a>
      </li>
      <li>It may also say that you still have to take the "Feststellungsprüfung (FSP)" or visit a “Studienkolleg” to obtain the necessary German higher education entry qualification. The “Feststellungsprüfung” is a test that checks your education level and allows you to enter university if you pass. The terms and conditions for this test are defined individually by each Land in Germany. As our partner universities are located in different Ländern, we will find the test that is most appropriate for your situation and study plans. The following options are among the possible alternatives leading to access to universities in some Ländern.</li>
      </ol>
      <p>
        The above listed options are just some examples for access qualifications out of a range of different possibilities. We will check individually which one might be most appropriate to your individual circumstances.
      </p>
    </div>
  );
}
