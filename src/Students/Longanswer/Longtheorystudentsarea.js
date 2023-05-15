import React from "react";
import { Link } from "react-router-dom";
import Longtheorybonusarea from "./Longtheorybonusarea";

const Longtheorystudentsarea = () => {

    return (
        <>
            {/* Start for students Area */}
            <div className="bg-color-light rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Example As Well As Sample Of or Students</h3>
                                <p className="description">Long theory Type Questions</p>
                            </div>
                        </div>
                        <div className="col-lg-8 mx-auto bg-color-white shadow-1 radius-10">
                            <div className="pt--30 pb--30 pl--20 pr--20">
                                <h5 className="color-secondary">Question</h5>
                                <h6 className="mb--10">
                                    What is the importance of sociology in terms of society?
                                </h6>
                                <h5 className="mt--10 color-secondary">Answer</h5>
                                <h6 className="">
                                    The discipline of sociology examines human society and its structures.
                                </h6>
                                <h5 className="mt--20 color-secondary">Explanation</h5>
                                <h6 className="">
                                    The discipline of sociology examines human society and its structures....
                                    <div className="collapse" id="collapseExample">
                                        The discipline of sociology examines human society and its structures. Crime,
                                        religion, the family, the state, racial and economic differences, cultural views,
                                        and social stability or rapid upheaval in whole nations are all fair games for
                                        sociologists. Understanding how human activity and awareness affect and are shaped
                                        by surrounding cultural and social systems is a central goal of sociology, which seeks
                                        to unify the study of these disparate fields. Sociology is a fascinating and enlightening
                                        academic discipline because it helps us make sense of and make changes to the world around
                                        us. Love, race, gender, family strife, criminal activity, old age, and religious conviction
                                        are only few of the human phenomena that sociologists study. Crime and law, economic inequality,
                                        bias and discrimination, the educational system, the commercial world, the urban community, and
                                        social movements are only some of the societal phenomena that sociology investigates and analyses.
                                        Population expansion, migration, conflict, and economic growth are all global issues that sociologists
                                        investigate.
                                        <p className="mt-4">
                                            Sociologists place a premium on collecting and analyzing data to improve our knowledge of society
                                            at large. Sociologists use a wide variety of research techniques. Among the many methods used by
                                            sociologists include participant observation, questionnaires, interviews, focus groups, lab
                                            experiments, and the analysis of historical records and census data. Sociology's study techniques
                                            and ideas provide profound understanding of the social processes that mold current human existence,
                                            social issues, and social possibilities. By gaining a deeper comprehension of these societal
                                            dynamics, we get a clearer picture of the forces at play in our own lives. C. Wright Mills coined
                                            the term "the sociological imagination" to describe one's capacity to make sense of one's own
                                            life in the context of larger social forces and events. This ability is crucial for achieving
                                            success in one's personal and professional endeavors in today's dynamic and complex society.
                                        </p>
                                        <p className="mt-4">
                                            Sociology majors learn to examine human society objectively and formulate meaningful research topics.
                                            They understand what makes a solid social research project, how to gather and evaluate empirical data,
                                            and how to effectively convey their results. Students with a background in sociology are also more
                                            equipped to educate others about society's inner workings and the steps that may be taken to improve
                                            it. They have acquired the skills necessary for critical analysis, original thought, and articulate
                                            expression. All of these skills are highly prized by employers in a broad range of industries.
                                        </p>
                                        <p className="mt-4">
                                            As a unique and illuminating lens through which to see and comprehend the social environment in which we
                                            live and which influences our lives, sociology is an invaluable resource. Understandings of social
                                            life that sociology offers go beyond the superficial and commonplace. Sociology is a field of study
                                            that, because to its unique analytical stance, social theories, and research methodologies, increases
                                            our understanding of how society, culture, and institutions impact not only our daily lives, but also
                                            the course of human history.
                                        </p>
                                    </div>
                                </h6>
                                <Link to="#collapseExample"
                                    className="rbt-btn-link"
                                    data-bs-toggle="collapse"
                                    //role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                >
                                    Read More <i className="feather-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End for students Area */}
            <Longtheorybonusarea />
        </>

    )
}

export default Longtheorystudentsarea;