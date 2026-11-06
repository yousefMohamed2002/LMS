import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
const BookOpenIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
);

const VideoIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
);

const LinkIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
);

const QuizIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
);

const PlusIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
);

const TrashIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
);

const ArrowLeftIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
);

const LogOutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
);

const FileTextIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
);

// --- Mock Data with Individual Unique Student Credentials ---
const REGISTERED_STUDENTS = [
  { id: 'st1', name: 'يوسف أحمد', email: 'youssef.ahmed@student.edu', password: '123', grade: 'Grade 10' },
  { id: 'st2', name: 'فاطمة محمد', email: 'fatma.mohamed@student.edu', password: '123', grade: 'Grade 10' },
  { id: 'st3', name: 'محمود إبراهيم', email: 'mahmoud.ibrahim@student.edu', password: '123', grade: 'Grade 11' },
];

const INITIAL_COURSES = [
  {
    id: 'c1',
    title: 'Advanced High School Biology',
    description: 'Cellular biology, genetics, ecology, and human anatomy for high school science students.',
    category: 'Science',
    teacher: 'Hager Mohamed',
    assignedStudentIds: ['st1', 'st2'],
    subjects: [
      {
        id: 'sub1',
        title: 'Module 1: Cell Structure & Organelles',
        materials: [
          { id: 'm1', type: 'document', title: 'Cell Biology Study Guide.pdf', content: 'Comprehensive overview of eukaryotic and prokaryotic cells, mitochondria, ribosomes, and the cell membrane.' },
          { id: 'm2', type: 'link', title: 'Interactive Cell Model 3D', content: 'https://www.cellsalive.com' },
          { id: 'm3', type: 'video_url', title: 'Introduction to Cells (Video)', content: 'https://www.youtube.com/embed/URUJD5NEXC8' }
        ],
        quizzes: [
          {
            id: 'q1',
            title: 'Cell Organelles Quick Check',
            questions: [
              {
                question: 'Which organelle is known as the powerhouse of the cell?',
                options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'],
                correctIndex: 1
              },
              {
                question: 'Which structure is present in plant cells but absent in animal cells?',
                options: ['Cell Membrane', 'Cell Wall', 'Mitochondria', 'Endoplasmic Reticulum'],
                correctIndex: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: 'General Chemistry & Reactions',
    description: 'Explore atomic structure, the periodic table, chemical bonding, and stoichiometry.',
    category: 'Science',
    teacher: 'Hager Mohamed',
    assignedStudentIds: ['st1'],
    subjects: [
      {
        id: 'sub2',
        title: 'Module 1: Periodic Table & Atomic Structure',
        materials: [
          { id: 'm4', type: 'document', title: 'Periodic Table Trends Notes', content: 'Electronegativity, ionization energy, and atomic radius trends across periods and groups.' }
        ],
        quizzes: [
          {
            id: 'q2',
            title: 'Atomic Structure MCQ Quiz',
            questions: [
              {
                question: 'What is the atomic number of Carbon?',
                options: ['6', '8', '12', '14'],
                correctIndex: 0
              }
            ]
          }
        ]
      }
    ]
  }
];

export default function App() {
  const [userSession, setUserSession] = useState(null); // { role: 'teacher'|'student', name, email, id }
  const [loginMode, setLoginMode] = useState('select'); // 'select' | 'teacher_login' | 'student_login'
  
  // Student Login Inputs
  const [studentEmailInput, setStudentEmailInput] = useState('alex.johnson@student.edu');
  const [studentPasswordInput, setStudentPasswordInput] = useState('');

  // Teacher Login Inputs
  const [teacherEmailInput, setTeacherEmailInput] = useState('hager.mohamed@school.edu');
  const [teacherPasswordInput, setTeacherPasswordInput] = useState('123');
  const [loginError, setLoginError] = useState('');

  // App Data State
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('lms_courses_v4');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  useEffect(() => {
    localStorage.setItem('lms_courses_v4', JSON.stringify(courses));
  }, [courses]);

  // Navigation state inside dashboard
  const [activeCourseId, setActiveCourseId] = useState(null);
  const [activeSubjectId, setActiveSubjectId] = useState(null);
  const [activeView, setActiveView] = useState('dashboard'); // 'dashboard', 'course_detail', 'quiz_taking'

  // Modal / Creator states
  const [showCreateCourseModal, setShowCreateCourseModal] = useState(false);
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseDesc, setNewCourseDesc] = useState('');
  const [newCourseCategory, setNewCourseCategory] = useState('Science');

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assigningCourse, setAssigningCourse] = useState(null);
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [newSubjectTitle, setNewSubjectTitle] = useState('');

  const [showMaterialModal, setShowMaterialModal] = useState(false);
  const [matTitle, setMatTitle] = useState('');
  const [matType, setMatType] = useState('document'); // document, link, video_url, video_file
  const [matContent, setMatContent] = useState('');
  const [matFileObj, setMatFileObj] = useState(null);

  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizTitle, setQuizTitle] = useState('');
  const [quizQuestions, setQuizQuestions] = useState([
    { question: '', options: ['', '', '', ''], correctIndex: 0 }
  ]);

  // Quiz Taking State
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);

  // --- Handlers ---
  const handleLogin = (e, targetRole) => {
    e.preventDefault();
    setLoginError('');

    if (targetRole === 'teacher') {
      if (!teacherEmailInput.trim() || !teacherPasswordInput.trim()) {
        setLoginError('Please enter both email and password.');
        return;
      }
      if (teacherPasswordInput !== '123') {
        setLoginError('Incorrect password. (Hint: password is 123)');
        return;
      }
      setUserSession({
        role: 'teacher',
        name: 'Hager Mohamed',
        email: teacherEmailInput,
        title: 'Science Department Head'
      });
    } else {
      const studentObj = REGISTERED_STUDENTS.find(s => s.email.toLowerCase() === studentEmailInput.trim().toLowerCase());
      if (!studentObj) {
        setLoginError('No student found with this email address.');
        return;
      }
      if (studentPasswordInput !== '123') {
        setLoginError('Incorrect password. (Hint: password is 123)');
        return;
      }
      setUserSession({
        role: 'student',
        id: studentObj.id,
        name: studentObj.name,
        email: studentObj.email,
        grade: studentObj.grade
      });
    }
  };

  const handleLogout = () => {
    setUserSession(null);
    setLoginMode('select');
    setActiveView('dashboard');
    setActiveCourseId(null);
    setActiveSubjectId(null);
  };

  // Course creation
  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!newCourseTitle.trim()) return;

    const newCourse = {
      id: 'c_' + Date.now(),
      title: newCourseTitle,
      description: newCourseDesc,
      category: newCourseCategory,
      teacher: 'Hager Mohamed',
      assignedStudentIds: [],
      subjects: []
    };

    setCourses([...courses, newCourse]);
    setNewCourseTitle('');
    setNewCourseDesc('');
    setShowCreateCourseModal(false);
  };

  const handleDeleteCourse = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(c => c.id !== courseId));
      if (activeCourseId === courseId) {
        setActiveCourseId(null);
        setActiveView('dashboard');
      }
    }
  };

  // Assign students to course
  const openAssignModal = (course) => {
    setAssigningCourse(course);
    setSelectedStudentIds(course.assignedStudentIds || []);
    setShowAssignModal(true);
  };

  const handleSaveAssignments = (e) => {
    e.preventDefault();
    if (!assigningCourse) return;

    setCourses(courses.map(c => {
      if (c.id === assigningCourse.id) {
        return { ...c, assignedStudentIds: selectedStudentIds };
      }
      return c;
    }));
    setShowAssignModal(false);
    setAssigningCourse(null);
  };

  // Subject creation
  const handleAddSubject = (e) => {
    e.preventDefault();
    if (!newSubjectTitle.trim() || !activeCourseId) return;

    const newSubject = {
      id: 'sub_' + Date.now(),
      title: newSubjectTitle,
      materials: [],
      quizzes: []
    };

    setCourses(courses.map(c => {
      if (c.id === activeCourseId) {
        return { ...c, subjects: [...c.subjects, newSubject] };
      }
      return c;
    }));

    setNewSubjectTitle('');
    setShowSubjectModal(false);
  };

  const handleDeleteSubject = (subjectId) => {
    if (window.confirm('Delete this subject and its contents?')) {
      setCourses(courses.map(c => {
        if (c.id === activeCourseId) {
          return { ...c, subjects: c.subjects.filter(s => s.id !== subjectId) };
        }
        return c;
      }));
    }
  };

  // Material creation
  const handleAddMaterial = (e) => {
    e.preventDefault();
    if (!matTitle.trim() || !activeSubjectId) return;

    let contentToStore = matContent;
    if (matType === 'video_file' && matFileObj) {
      contentToStore = URL.createObjectURL(matFileObj);
    }

    const newMat = {
      id: 'm_' + Date.now(),
      type: matType === 'video_file' ? 'video_file' : matType,
      title: matTitle,
      content: contentToStore
    };

    setCourses(courses.map(c => {
      if (c.id === activeCourseId) {
        const updatedSubjects = c.subjects.map(sub => {
          if (sub.id === activeSubjectId) {
            return { ...sub, materials: [...sub.materials, newMat] };
          }
          return sub;
        });
        return { ...c, subjects: updatedSubjects };
      }
      return c;
    }));

    setMatTitle('');
    setMatContent('');
    setMatFileObj(null);
    setShowMaterialModal(false);
  };

  const handleDeleteMaterial = (materialId) => {
    setCourses(courses.map(c => {
      if (c.id === activeCourseId) {
        const updatedSubjects = c.subjects.map(sub => {
          return {
            ...sub,
            materials: sub.materials.filter(m => m.id !== materialId)
          };
        });
        return { ...c, subjects: updatedSubjects };
      }
      return c;
    }));
  };

  // Quiz creation
  const handleAddQuizQuestion = () => {
    setQuizQuestions([...quizQuestions, { question: '', options: ['', '', '', ''], correctIndex: 0 }]);
  };

  const handleQuizQuestionChange = (index, field, value) => {
    const updated = [...quizQuestions];
    updated[index][field] = value;
    setQuizQuestions(updated);
  };

  const handleQuizOptionChange = (qIndex, oIndex, value) => {
    const updated = [...quizQuestions];
    updated[qIndex].options[oIndex] = value;
    setQuizQuestions(updated);
  };

  const handleSaveQuiz = (e) => {
    e.preventDefault();
    if (!quizTitle.trim() || !activeSubjectId) return;

    const newQuiz = {
      id: 'q_' + Date.now(),
      title: quizTitle,
      questions: quizQuestions
    };

    setCourses(courses.map(c => {
      if (c.id === activeCourseId) {
        const updatedSubjects = c.subjects.map(sub => {
          if (sub.id === activeSubjectId) {
            return { ...sub, quizzes: [...sub.quizzes, newQuiz] };
          }
          return sub;
        });
        return { ...c, subjects: updatedSubjects };
      }
      return c;
    }));

    setQuizTitle('');
    setQuizQuestions([{ question: '', options: ['', '', '', ''], correctIndex: 0 }]);
    setShowQuizModal(false);
  };

  const handleDeleteQuiz = (quizId) => {
    setCourses(courses.map(c => {
      if (c.id === activeCourseId) {
        const updatedSubjects = c.subjects.map(sub => {
          return {
            ...sub,
            quizzes: sub.quizzes.filter(q => q.id !== quizId)
          };
        });
        return { ...c, subjects: updatedSubjects };
      }
      return c;
    }));
  };

  // Start taking quiz
  const startQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setActiveView('quiz_taking');
  };

  const submitQuiz = () => {
    let score = 0;
    activeQuiz.questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  // --- Render Login Portal if not logged in ---
  if (!userSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl text-indigo-400 mb-3 shadow-inner">
              <BookOpenIcon className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Science LMS Portal</h1>
            <p className="text-sm text-slate-400 mt-1">Instructor: Hager Mohamed</p>
          </div>

          {loginMode === 'select' && (
            <div className="space-y-4">
              <button
                onClick={() => { setLoginMode('teacher_login'); setLoginError(''); }}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Teacher Portal</div>
                    <div className="text-xs text-indigo-200">Hager Mohamed (Science Instructor)</div>
                  </div>
                </div>
                <span className="text-xl">→</span>
              </button>

              <button
                onClick={() => { setLoginMode('student_login'); setLoginError(''); }}
                className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-white font-medium rounded-xl shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <UserIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Student Portal</div>
                    <div className="text-xs text-slate-400">Access assigned courses & quizzes</div>
                  </div>
                </div>
                <span className="text-xl">→</span>
              </button>
            </div>
          )}

          {loginMode === 'teacher_login' && (
            <form onSubmit={(e) => handleLogin(e, 'teacher')} className="space-y-4">
              <button
                type="button"
                onClick={() => { setLoginMode('select'); setLoginError(''); }}
                className="flex items-center text-xs font-semibold text-slate-400 hover:text-indigo-400 mb-2"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5 mr-1" /> Back to Role Selection
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-indigo-600/30 border border-indigo-500/30 rounded-xl text-indigo-400">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Teacher Sign In</h2>
                  <p className="text-xs text-slate-400">Hager Mohamed (Science)</p>
                </div>
              </div>

              {loginError && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl">
                  {loginError}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={teacherEmailInput}
                  onChange={(e) => setTeacherEmailInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={teacherPasswordInput}
                  onChange={(e) => setTeacherPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all text-sm mt-2"
              >
                Sign In as Teacher
              </button>
            </form>
          )}

          {loginMode === 'student_login' && (
            <form onSubmit={(e) => handleLogin(e, 'student')} className="space-y-4">
              <button
                type="button"
                onClick={() => { setLoginMode('select'); setLoginError(''); }}
                className="flex items-center text-xs font-semibold text-slate-400 hover:text-indigo-400 mb-2"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5 mr-1" /> Back to Role Selection
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-emerald-600/30 border border-emerald-500/30 rounded-xl text-emerald-400">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Student Sign In</h2>
                  <p className="text-xs text-slate-400">Enter your unique student email and password</p>
                </div>
              </div>

              {loginError && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl">
                  {loginError}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Student Email</label>
                <input
                  type="email"
                  placeholder="e.g. alex.johnson@student.edu"
                  value={studentEmailInput}
                  onChange={(e) => setStudentEmailInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Student Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={studentPasswordInput}
                  onChange={(e) => setStudentPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-sm mt-2"
              >
                Sign In as Student
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // --- Filter courses based on role ---
  const displayedCourses = userSession.role === 'teacher'
    ? courses
    : courses.filter(c => c.assignedStudentIds && c.assignedStudentIds.includes(userSession.id));

  const activeCourse = courses.find(c => c.id === activeCourseId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-md">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setActiveView('dashboard'); setActiveCourseId(null); }}>
          <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-600/30">
            <BookOpenIcon className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold text-white leading-tight">Science LMS</h1>
            <p className="text-xs text-slate-400">Instructor: Hager Mohamed</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-xl text-xs">
            <div className={`w-2.5 h-2.5 rounded-full ${userSession.role === 'teacher' ? 'bg-indigo-400' : 'bg-emerald-400'}`}></div>
            <span className="font-semibold text-white">{userSession.name}</span>
            <span className="text-slate-400 capitalize">({userSession.role})</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-1 px-3 py-1.5 bg-rose-600/10 hover:bg-rose-600/20 border border-rose-500/30 text-rose-400 rounded-xl text-xs font-medium transition-all"
          >
            <LogOutIcon className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6">
        {/* --- VIEW 1: DASHBOARD --- */}
        {activeView === 'dashboard' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  {userSession.role === 'teacher' ? "Teacher Dashboard - Science Courses" : "My Enrolled Science Courses"}
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  {userSession.role === 'teacher'
                    ? "Manage your science curriculum, upload study materials, videos, and assign courses to students."
                    : `Welcome back, ${userSession.name}! Access your assigned science courses, study notes, video tutorials, and interactive quizzes.`}
                </p>
              </div>

              {userSession.role === 'teacher' && (
                <button
                  onClick={() => setShowCreateCourseModal(true)}
                  className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-indigo-600/20 transition-all"
                >
                  <PlusIcon className="w-4 h-4" />
                  <span>Create New Course</span>
                </button>
              )}
            </div>

            {displayedCourses.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">
                <div className="inline-flex p-4 bg-slate-800 rounded-full text-slate-400 mb-3">
                  <BookOpenIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">No Courses Available</h3>
                <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
                  {userSession.role === 'teacher'
                    ? "You haven't created any science courses yet. Click 'Create New Course' to get started."
                    : "No science courses have been assigned to your student account yet by Hager Mohamed."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCourses.map(course => {
                  const assignedCount = course.assignedStudentIds ? course.assignedStudentIds.length : 0;
                  return (
                    <div
                      key={course.id}
                      className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold rounded-full">
                            {course.category}
                          </span>
                          {userSession.role === 'teacher' && (
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => openAssignModal(course)}
                                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition-colors"
                                title="Assign Students"
                              >
                                Students ({assignedCount})
                              </button>
                              <button
                                onClick={() => handleDeleteCourse(course.id)}
                                className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors rounded-lg"
                                title="Delete Course"
                              >
                                <TrashIcon className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <div className="text-xs text-slate-400">
                          <span className="font-semibold text-slate-300">{course.subjects ? course.subjects.length : 0}</span> Modules
                        </div>
                        <button
                          onClick={() => {
                            setActiveCourseId(course.id);
                            setActiveView('course_detail');
                          }}
                          className="px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/30 rounded-xl text-xs font-semibold transition-all"
                        >
                          Open Course →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* --- VIEW 2: COURSE DETAIL & MODULES --- */}
        {activeView === 'course_detail' && activeCourse && (
          <div>
            <button
              onClick={() => { setActiveView('dashboard'); setActiveCourseId(null); }}
              className="flex items-center text-xs font-semibold text-slate-400 hover:text-indigo-400 mb-6"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5 mr-1" /> Back to Dashboard
            </button>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold rounded-full">
                      {activeCourse.category}
                    </span>
                    <span className="text-xs text-slate-400">Instructor: {activeCourse.teacher}</span>
                  </div>
                  <h2 className="text-2xl font-black text-white">{activeCourse.title}</h2>
                  <p className="text-sm text-slate-400 mt-1">{activeCourse.description}</p>
                </div>

                {userSession.role === 'teacher' && (
                  <button
                    onClick={() => setShowSubjectModal(true)}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-indigo-600/20 transition-all whitespace-nowrap"
                  >
                    <PlusIcon className="w-4 h-4" />
                    <span>Add Module / Subject</span>
                  </button>
                )}
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-4">Course Modules & Subjects</h3>

            {(!activeCourse.subjects || activeCourse.subjects.length === 0) ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-sm">
                No modules created for this course yet.
              </div>
            ) : (
              <div className="space-y-6">
                {activeCourse.subjects.map(subject => (
                  <div key={subject.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                      <h4 className="text-base font-bold text-white flex items-center">
                        <BookOpenIcon className="w-4 h-4 mr-2 text-indigo-400" />
                        {subject.title}
                      </h4>

                      {userSession.role === 'teacher' && (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => { setActiveSubjectId(subject.id); setShowMaterialModal(true); }}
                            className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/30 rounded-xl text-xs font-semibold transition-all"
                          >
                            + Add Material
                          </button>
                          <button
                            onClick={() => { setActiveSubjectId(subject.id); setShowQuizModal(true); }}
                            className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 rounded-xl text-xs font-semibold transition-all"
                          >
                            + Add MCQ Quiz
                          </button>
                          <button
                            onClick={() => { setActiveSubjectId(subject.id); handleDeleteSubject(subject.id); }}
                            className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg transition-colors"
                            title="Delete Module"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Materials List */}
                    <div className="mb-6">
                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Learning Materials</h5>
                      {(!subject.materials || subject.materials.length === 0) ? (
                        <p className="text-xs text-slate-500 italic">No materials added to this module yet.</p>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {subject.materials.map(mat => (
                            <div key={mat.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="flex items-center text-xs font-semibold text-indigo-400">
                                    {mat.type === 'document' && <FileTextIcon className="w-3.5 h-3.5 mr-1" />}
                                    {mat.type === 'link' && <LinkIcon className="w-3.5 h-3.5 mr-1" />}
                                    {(mat.type === 'video_url' || mat.type === 'video_file') && <VideoIcon className="w-3.5 h-3.5 mr-1" />}
                                    <span className="capitalize">{mat.type.replace('_', ' ')}</span>
                                  </span>

                                  {userSession.role === 'teacher' && (
                                    <button
                                      onClick={() => { setActiveSubjectId(subject.id); handleDeleteMaterial(mat.id); }}
                                      className="text-slate-500 hover:text-rose-400 text-xs"
                                    >
                                      Delete
                                    </button>
                                  )}
                                </div>

                                <h6 className="text-sm font-bold text-white mb-1">{mat.title}</h6>

                                {mat.type === 'document' && (
                                  <p className="text-xs text-slate-400 bg-slate-900 p-2.5 rounded-lg mt-2 leading-relaxed">
                                    {mat.content}
                                  </p>
                                )}

                                {mat.type === 'link' && (
                                  <a
                                    href={mat.content}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-indigo-400 hover:underline flex items-center mt-2 break-all"
                                  >
                                    <LinkIcon className="w-3.5 h-3.5 mr-1 shrink-0" />
                                    {mat.content}
                                  </a>
                                )}

                                {mat.type === 'video_url' && (
                                  <div className="mt-3 aspect-video w-full bg-black rounded-lg overflow-hidden">
                                    <iframe
                                      src={mat.content}
                                      title={mat.title}
                                      className="w-full h-full"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                )}

                                {mat.type === 'video_file' && (
                                  <div className="mt-3">
                                    <video controls className="w-full rounded-lg bg-black aspect-video">
                                      <source src={mat.content} />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Quizzes List */}
                    <div>
                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">MCQ Quizzes</h5>
                      {(!subject.quizzes || subject.quizzes.length === 0) ? (
                        <p className="text-xs text-slate-500 italic">No quizzes available for this module.</p>
                      ) : (
                        <div className="space-y-3">
                          {subject.quizzes.map(quiz => (
                            <div key={quiz.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-emerald-600/20 text-emerald-400 rounded-lg">
                                  <QuizIcon className="w-4 h-4" />
                                </div>
                                <div>
                                  <h6 className="text-sm font-bold text-white">{quiz.title}</h6>
                                  <p className="text-xs text-slate-400">{quiz.questions ? quiz.questions.length : 0} Multiple Choice Questions</p>
                                </div>
                              </div>

                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => startQuiz(quiz)}
                                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-emerald-600/20"
                                >
                                  Take Quiz
                                </button>
                                {userSession.role === 'teacher' && (
                                  <button
                                    onClick={() => { setActiveSubjectId(subject.id); handleDeleteQuiz(quiz.id); }}
                                    className="p-2 text-slate-500 hover:text-rose-400 rounded-lg text-xs"
                                    title="Delete Quiz"
                                  >
                                    <TrashIcon className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- VIEW 3: QUIZ TAKING INTERFACE --- */}
        {activeView === 'quiz_taking' && activeQuiz && (
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setActiveView('course_detail')}
              className="flex items-center text-xs font-semibold text-slate-400 hover:text-emerald-400 mb-6"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5 mr-1" /> Back to Course
            </button>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-6 shadow-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2.5 bg-emerald-600/20 text-emerald-400 rounded-xl">
                  <QuizIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{activeQuiz.title}</h2>
                  <p className="text-xs text-slate-400">Multiple Choice Assessment</p>
                </div>
              </div>

              {quizSubmitted && (
                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
                    <div>
                      <h4 className="font-bold text-white text-base">Quiz Submitted Successfully!</h4>
                      <p className="text-xs text-emerald-300">
                        Your Score: <span className="font-bold">{quizScore}</span> / {activeQuiz.questions.length} ({Math.round((quizScore / activeQuiz.questions.length) * 100)}%)
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setQuizSubmitted(false)}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {activeQuiz.questions.map((q, qIndex) => {
                const isCorrect = quizAnswers[qIndex] === q.correctIndex;
                return (
                  <div key={qIndex} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-sm font-bold text-white mb-4">
                      Question {qIndex + 1}: {q.question}
                    </h4>

                    <div className="space-y-2.5">
                      {q.options.map((opt, oIndex) => {
                        let btnStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700";
                        if (quizAnswers[qIndex] === oIndex) {
                          btnStyle = "bg-indigo-600/20 border-indigo-500 text-white font-medium";
                        }
                        if (quizSubmitted) {
                          if (oIndex === q.correctIndex) {
                            btnStyle = "bg-emerald-600/20 border-emerald-500 text-emerald-300 font-medium";
                          } else if (quizAnswers[qIndex] === oIndex && oIndex !== q.correctIndex) {
                            btnStyle = "bg-rose-600/20 border-rose-500 text-rose-300 font-medium";
                          }
                        }

                        return (
                          <button
                            key={oIndex}
                            disabled={quizSubmitted}
                            onClick={() => setQuizAnswers({ ...quizAnswers, [qIndex]: oIndex })}
                            className={`w-full text-left px-4 py-3 border rounded-xl text-sm transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-xs">
                              {String.fromCharCode(65 + oIndex)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {!quizSubmitted && (
                <button
                  onClick={submitQuiz}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all text-sm"
                >
                  Submit Quiz Answers
                </button>
              )}
            </div>
          </div>
        )}
      </main>

      {/* --- MODALS --- */}

      {/* 1. Create Course Modal */}
      {showCreateCourseModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Create New Science Course</h3>
            <form onSubmit={handleCreateCourse} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Course Title</label>
                <input
                  type="text"
                  placeholder="e.g., Advanced Physics & Mechanics"
                  value={newCourseTitle}
                  onChange={(e) => setNewCourseTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Description</label>
                <textarea
                  rows="3"
                  placeholder="Overview of course topics..."
                  value={newCourseDesc}
                  onChange={(e) => setNewCourseDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Category</label>
                <select
                  value={newCourseCategory}
                  onChange={(e) => setNewCourseCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="Science">Science</option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateCourseModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/30"
                >
                  Create Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Assign Students Modal */}
      {showAssignModal && assigningCourse && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1">Assign Students to Course</h3>
            <p className="text-xs text-slate-400 mb-4">{assigningCourse.title}</p>

            <form onSubmit={handleSaveAssignments} className="space-y-4">
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {REGISTERED_STUDENTS.map(student => {
                  const isChecked = selectedStudentIds.includes(student.id);
                  return (
                    <label
                      key={student.id}
                      className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedStudentIds([...selectedStudentIds, student.id]);
                            } else {
                              setSelectedStudentIds(selectedStudentIds.filter(id => id !== student.id));
                            }
                          }}
                          className="w-4 h-4 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-slate-900"
                        />
                        <div>
                          <div className="text-sm font-bold text-white">{student.name}</div>
                          <div className="text-xs text-slate-400">{student.grade} • {student.email}</div>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAssignModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/30"
                >
                  Save Assignments
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. Add Subject Module Modal */}
      {showSubjectModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Add Course Module / Subject</h3>
            <form onSubmit={handleAddSubject} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Module Title</label>
                <input
                  type="text"
                  placeholder="e.g., Module 2: Chemical Bonding"
                  value={newSubjectTitle}
                  onChange={(e) => setNewSubjectTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSubjectModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/30"
                >
                  Add Module
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. Add Material Modal */}
      {showMaterialModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Add Learning Material</h3>
            <form onSubmit={handleAddMaterial} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Material Title</label>
                <input
                  type="text"
                  placeholder="e.g., Lab Safety Guidelines"
                  value={matTitle}
                  onChange={(e) => setMatTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Material Type</label>
                <select
                  value={matType}
                  onChange={(e) => setMatType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="document">Text Notes / Document</option>
                  <option value="link">Web Link</option>
                  <option value="video_url">Video Embed URL (YouTube)</option>
                  <option value="video_file">Upload Video File (.mp4/.mov)</option>
                </select>
              </div>

              {matType === 'document' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Content / Notes</label>
                  <textarea
                    rows="4"
                    placeholder="Enter study notes or summary..."
                    value={matContent}
                    onChange={(e) => setMatContent(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
              )}

              {matType === 'link' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">URL Link</label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    value={matContent}
                    onChange={(e) => setMatContent(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
              )}

              {matType === 'video_url' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Embed URL (e.g. https://www.youtube.com/embed/XYZ)</label>
                  <input
                    type="url"
                    placeholder="https://www.youtube.com/embed/..."
                    value={matContent}
                    onChange={(e) => setMatContent(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
              )}

              {matType === 'video_file' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Select Video File (.mp4, .webm, .mov)</label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setMatFileObj(e.target.files[0])}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
                    required
                  />
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowMaterialModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/30"
                >
                  Add Material
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. Add Quiz Modal */}
      {showQuizModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-4">Create MCQ Quiz</h3>
            <form onSubmit={handleSaveQuiz} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Quiz Title</label>
                <input
                  type="text"
                  placeholder="e.g., Chapter 1 Review Quiz"
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="space-y-4 border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Questions</h4>
                  <button
                    type="button"
                    onClick={handleAddQuizQuestion}
                    className="text-xs text-indigo-400 hover:underline font-semibold"
                  >
                    + Add Question
                  </button>
                </div>

                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Question {qIndex + 1}</label>
                      <input
                        type="text"
                        placeholder="Enter question text..."
                        value={q.question}
                        onChange={(e) => handleQuizQuestionChange(qIndex, 'question', e.target.value)}
                        className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-indigo-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-medium text-slate-400">Options (Select correct answer)</label>
                      {q.options.map((opt, oIndex) => (
                        <div key={oIndex} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name={`correct_${qIndex}`}
                            checked={q.correctIndex === oIndex}
                            onChange={() => handleQuizQuestionChange(qIndex, 'correctIndex', oIndex)}
                            className="text-indigo-600 focus:ring-indigo-500 bg-slate-900"
                            title="Mark as correct answer"
                          />
                          <input
                            type="text"
                            placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                            value={opt}
                            onChange={(e) => handleQuizOptionChange(qIndex, oIndex, e.target.value)}
                            className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-indigo-500"
                            required
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowQuizModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/30"
                >
                  Save Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}