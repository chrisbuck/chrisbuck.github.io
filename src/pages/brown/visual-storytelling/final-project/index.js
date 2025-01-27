import React from "react";
import Table from "react-bootstrap/Table";
import { Helmet } from "react-helmet";

import pageStyles from "../../../Page.module.scss";
import styles from "./final-project.module.scss";

import imageChart1 from "@assets/images/Chart1-Scatter.png";
import imageChart2 from "@assets/images/Chart1B-StateBias.png";
import imageChart3 from "@assets/images/Chart2-BarGallup.png";
import imageChart4 from "@assets/images/Chart3-AvgBarGallup.png";
import imageChart5 from "@assets/images/Chart4-AbsBarGallup-Linear.png";
import imageChart5B from "@assets/images/Chart4-AbsBarGallup-Poly.png";
import imageHeadlines from "@assets/images/headlines.png";
import imageWomanYelling from "@assets/images/yelling.png";
import Section from "@components/Section";
import Heading from "@components/Heading";

const Page = () => {
    return (
        <div>
            <Helmet>
                <title>Is Political Polling Broken?</title>
                <meta
                    property="og:description"
                    content={"An Analysis in 5 Charts. By Chris Buck, Brown MTL program."}
                />
                <meta property="og:image" content={imageChart1} />
                <meta
                    property="og:url"
                    content={"https://chrisbuck.github.io/#/brown/visual-storytelling/final-project"}
                />
                <meta property="og:type" content="article" />
            </Helmet>
            <Section bgColor="white" color="charcoal">
                <div className="titleWrap">
                    <Heading h="h1" color="maroon">
                        Is Political Polling Broken?
                    </Heading>
                    <span>An Analysis in Five Charts</span>
                </div>
                <div className="attribution">
                    <span>By Chris Buck</span>
                    <br></br>
                    <span>For Visual Storytelling, Brown MTL, Fall, 2024</span>
                </div>
            </Section>
            <Section bgColor="white" color="charcoal">
                <Heading h="h2" color="maroon">
                    Did You Feel Like This After the 2024 Election?
                </Heading>
                <img className={`${pageStyles.img} ${styles.firstImg}`} src={imageWomanYelling} alt="Woman yelling" />
            </Section>
            <Section bgColor="white" color="charcoal">
                <Heading h="h2" color="maroon">
                    Is Political Polling Broken?
                </Heading>
                <p>
                    It depends on whom you ask, but the general consensus is <strong>yes</strong>.
                </p>
                <p>Since 2016, faith in political polling has declined.</p>
                <p>The media has covered the problem extensively…</p>
                <img className={`${pageStyles.img} ${styles.secondImg}`} src={imageHeadlines} alt="Headlines" />
                <p>
                    All that these headlines show is that there is a real concern about the accuracy of polling. The
                    media is good at highlighting that there may be a problem, but they often don't articulate what that
                    problem is. Or, they often downplay the issues with polling, reassuring us that this time it will be
                    better, though that's not the way it usually works out.
                </p>
                <p>The question about whether political polling is broken is really a series of questions:</p>
                <p>
                    <ul>
                        <li>Is political polling inaccurate?</li>
                        <li>Is political polling biased?</li>
                        <li>Is inaccuracy attributable to bias or some other cause?</li>
                        <li>
                            How have the problems with polling (inaccuracy, bias, or something else) changed over time?
                        </li>
                        <li>Which problems, if any, are getting worse?</li>
                    </ul>
                </p>
                <p>
                    Though the issues involved are complex, and the questions concerning political polling are numerous,
                    the answers are relatively straightforward. So as not to bury the lead, here they are:
                </p>
                <p>
                    <ul>
                        <li>No, political polling is not broken.</li>
                        <li>Polling in U.S. Presidential elections has become more accurate over time.</li>
                        <li>
                            Polling is biased and always has been, which is to say that it historically favors one party
                            over another, though not always the same party.
                        </li>
                        <li>
                            Inaccuracy seems to be a product of bias, and bias seems to be a product of undersampling.
                        </li>
                        <li>
                            Undersampling has always been a problem, and overall the accuracy of political polling is
                            getting better, not worse. The bias is simply shifting from favoring Republicans to favoring
                            Democrats.
                        </li>
                    </ul>
                </p>
            </Section>
            <Section bgColor="white" color="charcoal">
                <Heading h="h2" color="maroon">
                    So What Happened in 2024?
                </Heading>
                <Heading h="h5" color="charcoal">
                    Chart #1
                </Heading>
                <img className={`${pageStyles.img} ${styles.chart1}`} src={imageChart1} alt="Chart 1" />
                <p>
                    For one thing, most news outlets were so sure that Harris would win, and so most of the American
                    people thought the same. The reason for this was that polling consistently told us so. Among the
                    polls surveying the sentiment of likely voters from the date that Harris announced her candidacy,
                    Harris was predicted to win 70% of the time.
                </p>
                <p>
                    But what explains this error? Was there something about the polling process that was flawed? Is
                    polling biased? The answer to this becomes clearer when we look at what happened in 2024 on a state
                    basis.
                </p>
                <p>
                    Explaining whether polls are biased is not a straightforward science. What constitutes bias? If a
                    poll ends up being wrong, was it necessarily biased? Is there a difference between being biased and
                    being wrong?
                </p>
                <p>
                    In order to delve into this topic we are first going to need to define the term "bias." I will use
                    that term as such:
                </p>
                <p>
                    Bias is the difference between an actual margin of victory and the projected margin of victory for a
                    particular party.
                </p>
                <p>
                    There's a lot to unpack there, so let's look at an example of this calculation to see what bias
                    means in practice.
                </p>
            </Section>
            <Section bgColor="white" color="charcoal">
                <Heading h="h2" color="maroon">
                    Example: The 1936 Election
                </Heading>
                <p>
                    In 1936 incumbent President Franklin Roosevelt, a Democrat, defeated his Republican challenger Alf
                    Landon. The polling percentages and actual outcome break down like this:
                </p>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Predicted Democrat</th>
                            <th>Predicted Republican</th>
                            <th>Predicted Margin</th>
                            <th>Actual Democrat</th>
                            <th>Actual Republican</th>
                            <th>Actual Margin</th>
                            <th>Margin Difference ("Bias")</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1936</td>
                            <td>53.8%</td>
                            <td>42.8%</td>
                            <td>11%</td>
                            <td>60.8%</td>
                            <td>36.5%</td>
                            <td>24.3%</td>
                            <td>13.3%</td>
                        </tr>
                    </tbody>
                </Table>
                <p>
                    Incumbent President Roosevelt was predicted to beat his Republican opponent by a margin of 11%.
                    Roosevelt, however, vastly outperformed this prediction and ended up winning by a margin of 24.3%.
                    It can be argued that if "bias" in polling is anything quantifiable, it must be the difference
                    between the actual outcome and the projected outcome. In this case, since Roosevelt, a Democrat, was
                    underestimated, we can say that the polling bias favored the Republican party.
                </p>
                <Heading h="h2" color="maroon">
                    Bias in the 2024 Election
                </Heading>
                <p>
                    If we apply this concept of bias to the 2024 election, specifically to the state polls, we see that
                    political polling was heavily biased in favor of the Democratic candidate, V.P. Harris. That is the
                    same thing as saying that the polls predicted a margin of victory for the Democratic candidate that
                    did not materialize, and underestimated the Republican candidate, Donald Trump.
                </p>
                <Heading h="h5" color="charcoal">
                    Chart #2:
                </Heading>
                <img className={`${pageStyles.img} ${styles.chart2}`} src={imageChart2} alt="Chart 2" />
                <p>
                    Note that in the chart above we are only mapping the direction of the bias. We are not saying, for
                    instance, that in Nebraska a candidate won by 17%. Rather, we are saying that the projected margin
                    of victory differed from the actual margin of victory, and that the Democratic party candidate was
                    overestimated, the Republican party candidate underestimated.
                </p>
                <Heading h="h2" color="maroon">
                    Is Bias A New Phenomenon?
                </Heading>
                <p>
                    If there is bias in elections, the next question we might ask is, how long has it been around? Is it
                    a new phenomenon?
                </p>
                <p>
                    The short answer is no. If we zoom out and look at the direction of bias in political polling over
                    time, we see that bias has always been with us, but it has varied in whether it favors Democrats or
                    Republicans.
                </p>
                <Heading h="h5" color="charcoal">
                    Chart #3:
                </Heading>
                <img className={`${pageStyles.img} ${styles.chart3}`} src={imageChart3} alt="Chart 3" />
                <p>
                    Interestingly, if we look at the 2024 election, far to the right, we see that polling was slightly
                    biased in favor of the Democrats, which lines up with what we would expect after looking at the
                    state polling data. Trump was underestimated in all but two states that were polled after Harris
                    announced her candidacy. And the same was true for the national polls as well.
                </p>
                <p>
                    Now that we have a definition of bias (a measure of which party benefits from another being
                    underestimated), we can better understand this chart. In the first few presidential elections that
                    were polled by the Gallup organization, the direction of bias clearly benefited the Republican
                    party. There are a lot of potential reasons for that, but one theory is that from 1936 - 1948, prior
                    to the maturation of the civil rights movement, the Democratic party identified with rural, white,
                    agrarian voters. Over the next 40 years that changed, sometimes gradually, sometimes quickly,
                    culminating in the eventual shift of rural whites and farmers to the Republican party.
                </p>
                <p>
                    Moving forward in time from 1952 we begin to see a shift (corresponding to the growing civil rights
                    movement) toward bias benefitting the Democratic party. By the time we get to the 1980's and '90's
                    this trend becomes more pronounced.
                </p>
                <p>
                    A variation of the above chart makes this clearer. Here is the average direction of bias in 12 year
                    cycles:
                </p>
                <Heading h="h5" color="charcoal">
                    Chart #4:
                </Heading>
                <img className={`${pageStyles.img} ${styles.chart4}`} src={imageChart4} alt="Chart 4" />
                <p>
                    One thing that this chart makes a bit more noticeable is how the amount of bias seems to be
                    declining over time. Is this observation true?
                </p>
                <Heading h="h2" color="maroon">
                    Is Political Polling Getting Worse in Recent Elections?
                </Heading>
                <p>
                    If you read the newspaper or watch TV, the message seems to be that there is something wrong with
                    political polling, that it is growing more inaccurate over time. 2016 and 2024 are highlighted as
                    dismal failures on the part of pollsters, with Donald Trump widely expected to lose both elections.
                    The question we need to ask is whether those expectations were reasonable?
                </p>
                <p>
                    One way of answering this question is to look at the level of bias, or the amount of difference
                    between the actual results and the projected results, without reference to political parties.
                    Similar to Chart #3, above, but without the color coding, if we look at the absolute level of bias,
                    we can do something really useful, and form a trendline.
                </p>
                <Heading h="h5" color="charcoal">
                    Chart #5:
                </Heading>
                <img className={`${pageStyles.img} ${styles.chart5}`} src={imageChart5} alt="Chart 5" />
                <p>
                    This chart very clearly shows that the average deviation between actual and projected results is
                    decreasing over time. Interestingly, we can identify three elections where the polls were almost
                    perfectly on target, 1968, 1984, and 2020. A subject for another paper might explore what made these
                    polls so much more precise.
                </p>
                <p>
                    Rather than simply eyeballing the chart let's quantify just how much more precise polling is getting
                    over time. One way of doing this is to draw a linear trendline. If we calculate the R-squared value,
                    we get a coefficient which describes how correlated the x and y axes are. If the coefficient is
                    zero, then the axes are unrelated. If the coefficient is one, the axes are perfectly correlated.
                </p>
                <p>
                    When we draw the linear trendline we get a coefficient value of .3334. That means that the axes are
                    pretty related. One way of thinking about it is that a third of the data is explained by the
                    trendline.
                </p>
                <p>Another way of seeing the trend is to draw a polynomial (3 order) trendline, as shown here:</p>
                <img
                    className={`${pageStyles.img} ${styles.chart5}`}
                    src={imageChart5B}
                    alt="Chart 5 with polynomial trendline"
                />
                <p>
                    A polynomial trendline is typically used to indicate periodicity however. Think rising and falling
                    retail sales by month. For example, we might expect to see peaks around the winter holidays, and
                    maybe smaller peaks around Memorial Day and Labor Day. Though a polynomial trendline, in this case,
                    has a higher R-squared value, 0.5317 to be exact, it is not clear that the trend in the data is
                    periodical. It may well be, but we won't really know until we have more data to work with, something
                    like another 40 years worth of elections, at least. For now, then, we should stick with the simple
                    linear trendline.
                </p>
                <Heading h="h2" color="maroon">
                    Conclusion
                </Heading>
                <p>
                    The five charts above (five primary charts, plus one variation) clearly tell a story. The story is
                    that bias in political polling is not new. The 2016 and 2024 elections, when compared to all other
                    elections for which we have polling data, were not that far off from their predictions. Generally
                    speaking, political polling is becoming more accurate over time, not less.
                </p>
                <p>
                    Moving forward, what should we expect? Well, just like in 1936 and 2024, there is one phenomenon
                    which is not likely to go away any time soon: the ability to predict what rural, conservative, white
                    male voters are going to do. In 1936 the opinions of farmers in rural counties was hard to gauge,
                    and led to underestimating Roosevelt's margin of victory by a whopping 13.3%. In 2024, rural,
                    conservative, white males were predominantly Republican, not Democrat, but the challenge of
                    predicting what they were going to do in the presidential election was still difficult. However, by
                    2024 the difference between actual and predicted results had diminished to just 1.5%, down
                    substantially from 1936. And there is no reason to think that the amount of bias in polling will
                    ever return to those 1936-48 levels.
                </p>
                <p>
                    Contrary to popular belief, political polling is not broken. In fact, it is the best it has ever
                    been.
                </p>
            </Section>
        </div>
    );
};

export default Page;
