### Roster Details<br />
Team Name: Lynn Vision Gaming<br />
Roster: C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr<br />
Global Rank: [84](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [10]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  773.6<br />
<br />
Final Rank Value (773.6) = Starting Rank Value (729.1) + Head To Head Adjustments (44.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.1
- 400 + ( ( 0.159 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 729.1


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
|           11 |      299 | 2025-02-12 | The Huns Esports     | L   | 0.842      | -            | -                | -                | -         |   -10.38 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|           10 |      313 | 2025-02-12 | ATOX Esports         | W   | 0.837      | 0.143        | 0.052 (0.006)    | 0.683 (0.082)    | 0 (0.000) |    20.47 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            9 |      317 | 2025-02-12 | The Huns Esports     | W   | 0.836      | 0.143        | 0.019 (0.002)    | 0.455 (0.054)    | 0 (0.000) |    17.12 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            8 |      319 | 2025-02-11 | Unsettled Resentment | W   | 0.835      | 0.143        | 0.002 (0.000)    | 0.215 (0.026)    | 0 (0.000) |    11.42 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            7 |      337 | 2025-02-11 | TYLOO                | W   | 0.831      | 0.143        | 0.011 (0.001)    | 0.160 (0.019)    | 0 (0.000) |    12.51 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            6 |      343 | 2025-02-11 | The Huns Esports     | L   | 0.829      | -            | -                | -                | -         |    -8.20 | C4LLM3SU3, EmiliaQAQ, Starry, westmelon, z4kr |
|            5 |     1698 | 2024-11-03 | TYLOO                | L   | 0.162      | -            | -                | -                | -         |    -2.71 | afufu, EmiliaQAQ, flying, westmelon, z4kr     |
|            4 |     1699 | 2024-11-02 | ATOX Esports         | W   | 0.162      | 0.417        | 0.004 (0.000)    | 0.013 (0.001)    | 1 (0.162) |     2.03 | afufu, EmiliaQAQ, flying, westmelon, z4kr     |
|            3 |     1722 | 2024-11-02 | Unsettled Resentment | W   | 0.155      | 0.417        | 0.002 (0.000)    | 0.215 (0.014)    | 1 (0.155) |     2.04 | afufu, EmiliaQAQ, flying, westmelon, z4kr     |
|            2 |     1911 | 2024-10-17 | The Huns Esports     | W   | 0.050      | 0.417        | 0.019 (0.000)    | 0.455 (0.009)    | 1 (0.050) |     1.10 | afufu, EmiliaQAQ, flying, westmelon, z4kr     |
|            1 |     1938 | 2024-10-16 | ATOX Esports         | L   | 0.043      | -            | -                | -                | -         |    -0.81 | afufu, EmiliaQAQ, flying, westmelon, z4kr     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,299.63)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.162 | $8,000.00      | $1,299.63       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
