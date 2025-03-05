### Roster Details<br />
Team Name: HSG<br />
Roster: Ann4, GFi, Hazel, olga, XiaoWu<br />
Global Rank: [192](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  634.4<br />
<br />
Final Rank Value (634.4) = Starting Rank Value (629.8) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.8
- 400 + ( ( 0.121 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 629.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1885 | 2024-10-18 | BIG EQUIPA            | W   | 0.306      | 0.328        | 0.021 (0.002)    | 0.073 (0.007)    | 0 (0.000) |     6.48 | Ann4, GFi, Hazel, olga, XiaoWu |
|            5 |     2154 | 2024-10-06 | OneDay                | W   | 0.225      | 0.250        | 0.000 (0.000)    | 0.060 (0.003)    | 0 (0.000) |     2.42 | Ann4, GFi, Hazel, olga, XiaoWu |
|            4 |     2479 | 2024-09-26 | Nomercy (Female team) | L   | 0.160      | -            | -                | -                | -         |    -2.69 | Ann4, GFi, Hazel, olga, XiaoWu |
|            3 |     2744 | 2024-09-19 | Imperial Female       | L   | 0.113      | -            | -                | -                | -         |    -0.38 | Ann4, GFi, Hazel, olga, XiaoWu |
|            2 |     2895 | 2024-09-14 | Imperial Female       | L   | 0.078      | -            | -                | -                | -         |    -0.26 | Ann4, GFi, Hazel, olga, XiaoWu |
|            1 |     2940 | 2024-09-12 | K27 Female            | L   | 0.066      | -            | -                | -                | -         |    -0.96 | Ann4, GFi, Hazel, olga, XiaoWu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($616.17)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.320 | $1,400.00      | $447.42         |
| 2024-10-06 |      0.225 | $750.00        | $168.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
