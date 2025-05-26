import Image from "next/image"
import { Calendar, MapPin, Mail, Download } from "lucide-react"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/profile-picture.jpg"
            alt="Esmaeel Moustafa"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Mobile Engineer offering 7+ years experience in building, integrating, testing and supporting different android applications across different business areas using different technologies.
        </p>
      </div>

      {/* Bio Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Bio
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I&apos;m a Mobile Engineer with 7+ years of experience specializing in Android development. I&apos;ve built, integrated, tested, and supported 
            various Android applications across different business domains, always focusing on creating scalable and maintainable solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Throughout my career, I&apos;ve worked on projects ranging from news applications for major press agencies to social platforms, 
            e-commerce apps, and fintech solutions. I&apos;m passionate about clean code, modern Android development practices, and contributing to the open-source community.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Currently working at thermondo in Berlin, I focus on building scalable mobile applications using Kotlin Multiplatform, 
            Android Jetpack, and modern development tools. I also enjoy mentoring other developers and sharing knowledge through technical content.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Android Development
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Kotlin / Java</li>
              <li>Android SDK</li>
              <li>Jetpack Compose</li>
              <li>Android Jetpack</li>
              <li>Kotlin Coroutines</li>
              <li>RxJava</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Architecture & Tools
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>MVVM / Design Patterns</li>
              <li>Dagger2 / Hilt / Koin</li>
              <li>Retrofit / Ktor</li>
              <li>Firebase</li>
              <li>GraphQL</li>
              <li>Unit Testing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Additional Skills
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Kotlin Multiplatform</li>
              <li>Flutter</li>
              <li>Git / GitHub</li>
              <li>CI/CD / Jenkins</li>
              <li>Python / JavaScript</li>
              <li>Penetration Testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Mobile Engineer
              </h3>
              <span className="text-gray-500 dark:text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Jan 2024 - Present
              </span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 mb-2">thermondo • Berlin, Germany</p>
            <p className="text-gray-600 dark:text-gray-300">
              Developing scalable mobile applications using Kotlin Multiplatform and modern Android development practices.
            </p>
          </div>

          <div className="border-l-4 border-gray-300 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Mobile Engineer
              </h3>
              <span className="text-gray-500 dark:text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Jul 2022 - Jan 2024
              </span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 mb-2">Zenjob • Berlin, Germany</p>
            <p className="text-gray-600 dark:text-gray-300">
              Built and maintained Android applications with focus on user experience, testing, and modern development practices 
              including Gradle, Unit Testing, Mockito, Espresso, and Kaspresso.
            </p>
          </div>

          <div className="border-l-4 border-gray-300 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Android Engineer
              </h3>
              <span className="text-gray-500 dark:text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Sep 2020 - Jun 2022
              </span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 mb-2">Squadio • Alexandria, Egypt</p>
            <p className="text-gray-600 dark:text-gray-300">
              Developed multiple Android applications including news apps for major press agencies, social platforms, and fintech solutions. 
              Led code reviews, mentoring sessions, and contributed to open-source projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              Berlin, Germany
            </div>
            <a 
              href="mailto:esmaeel.moustafa.n@gmail.com"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              esmaeel.moustafa.n@gmail.com
            </a>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </button>
        </div>
      </section>
    </div>
  )
}
