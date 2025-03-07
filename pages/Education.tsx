
import '../src/styles/style.css';

const Education = () => {
    return (
<main>
        <h2>My Academic Background</h2>

        <h3>Boston University, Boston, MA</h3>
        <img src="/images/bu.jpeg" alt="Boston University"/>
        <p><strong>Bachelor of Arts in Computer Science (2023 - 2026)</strong></p>
        <p>Expected Graduation: Spring 2026</p>
        <p>Cumulative GPA: 3.69</p>
        <p>Dean's List: Fall 2023</p>

        <h3>John Carroll University, University Heights, OH</h3>
        <img src="/images/jcu.jpeg" alt="John Carroll University"/>
        <p><strong>Bachelor of Arts in Computer Science and Mathematics (2021 - 2023)</strong></p>
        <p>Transferred to Boston University</p>
        <p>Cumulative GPA: 3.72</p>
        <p>Dean's List: Fall 2021, Spring 2022, Fall 2022, Spring 2023</p>

        <h3>S.T.F.A Leung Kau Kui College, Tuen Mun, Hong Kong</h3>
        <img src="/images/lkkc.jpeg" alt="Shun Tak Fraternal Association Leung Kau Kui College"/>
        <p><strong>Hong Kong Diploma of Secondary Education (HKDSE), 2021</strong></p>
        <p><strong>Best 5 Subjects:</strong></p>
        <ul>
            <li>Mathematics - 5*</li>
            <li>Mathematics Extended Part (Algebra and Calculus) - 5*</li>
            <li>Information and Communication Technology - 5*</li>
            <li>Physics - 5*</li>
            <li>English - 4</li>
        </ul>
        <p>Total Grade Points: 28 (Top 4.2% of 41,083 candidates)</p>
    </main>
    );
};

export default Education;