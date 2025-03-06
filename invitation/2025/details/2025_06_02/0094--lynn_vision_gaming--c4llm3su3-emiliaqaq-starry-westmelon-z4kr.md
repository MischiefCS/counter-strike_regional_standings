### Roster Details<br />
Team Name: Lynn Vision Gaming<br />
Roster: C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr<br />
Global Rank: [94](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  557.4<br />
<br />
Final Rank Value (557.4) = Starting Rank Value (527.8) + Head To Head Adjustments (29.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 527.8
- 400 + ( ( 0.055 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 527.8


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
|            6 |      299 | 2025-02-12 | The Huns Esports     | L   | 0.469      | -            | -                | -                | -         |    -3.81 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            5 |      313 | 2025-02-12 | ATOX Esports         | W   | 0.464      | 0.143        | 0.024 (0.002)    | 0.685 (0.045)    | 0 (0.000) |    12.84 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            4 |      317 | 2025-02-12 | The Huns Esports     | W   | 0.463      | 0.143        | 0.003 (0.000)    | 0.426 (0.028)    | 0 (0.000) |    11.24 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            3 |      319 | 2025-02-11 | Unsettled Resentment | W   | 0.462      | 0.143        | 0.000 (0.000)    | 0.263 (0.017)    | 0 (0.000) |     7.50 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            2 |      337 | 2025-02-11 | TYLOO                | W   | 0.457      | 0.143        | 0.000 (0.000)    | 0.159 (0.010)    | 0 (0.000) |     5.00 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            1 |      343 | 2025-02-11 | The Huns Esports     | L   | 0.456      | -            | -                | -                | -         |    -3.12 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
