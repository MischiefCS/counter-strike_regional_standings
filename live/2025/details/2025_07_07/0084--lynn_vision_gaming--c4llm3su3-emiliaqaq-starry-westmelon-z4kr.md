### Roster Details<br />
Team Name: Lynn Vision Gaming<br />
Roster: C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr<br />
Global Rank: [84](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  413.1<br />
<br />
Final Rank Value (413.1) = Starting Rank Value (403.4) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.4
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 403.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      299 | 2025-02-12 | The Huns Esports     | L   | 0.235      | -            | -                | -                | -         |    -3.75 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            5 |      313 | 2025-02-12 | ATOX Esports         | W   | 0.230      | 0.143        | 0.000 (0.000)    | 0.776 (0.026)    | 0 (0.000) |     4.84 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            4 |      317 | 2025-02-12 | The Huns Esports     | W   | 0.229      | 0.143        | 0.000 (0.000)    | 0.464 (0.015)    | 0 (0.000) |     3.67 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            3 |      319 | 2025-02-11 | Unsettled Resentment | W   | 0.228      | 0.143        | 0.000 (0.000)    | 0.293 (0.010)    | 0 (0.000) |     4.83 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            2 |      337 | 2025-02-11 | TYLOO                | W   | 0.224      | 0.143        | 0.000 (0.000)    | 0.160 (0.005)    | 0 (0.000) |     3.54 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            1 |      343 | 2025-02-11 | The Huns Esports     | L   | 0.223      | -            | -                | -                | -         |    -3.43 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
