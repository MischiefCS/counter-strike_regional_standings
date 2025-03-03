### Roster Details<br />
Team Name: 777 Esports<br />
Roster: Affava, Hagmeister, MadeInRed, qzr, Viktha<br />
Global Rank: [271](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [165]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  599.4<br />
<br />
Final Rank Value (599.4) = Starting Rank Value (608.9) + Head To Head Adjustments (-9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 608.9
- 400 + ( ( 0.107 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 608.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      818 | 2025-02-04 | Preasy Esport   | L   | 1.000      | -            | -                | -                | -         |    -9.55 | Affava, Hagmeister, MadeInRed, qzr, Viktha |
|            8 |      844 | 2025-02-04 | Viperio         | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.051 (0.007)    | 0 (0.000) |    15.27 | Affava, Hagmeister, MadeInRed, qzr, Viktha |
|            7 |     1760 | 2024-12-07 | NewBALLS        | L   | 0.639      | -            | -                | -                | -         |   -11.47 | Cruxey, Hagmeister, qzr, Viktha, wenba     |
|            6 |     1869 | 2024-12-04 | BRODA           | W   | 0.620      | 0.333        | 0.000 (0.000)    | 0.034 (0.007)    | 0 (0.000) |     4.88 | H4RR3, Hagmeister, qzr, Viktha, wenba      |
|            5 |     1983 | 2024-12-02 | Ex-ESC Gaming   | L   | 0.606      | -            | -                | -                | -         |    -9.18 | Affava, H4RR3, Hagmeister, qzr, Viktha     |
|            4 |     2106 | 2024-11-30 | Sashi Academy   | L   | 0.594      | -            | -                | -                | -         |    -7.61 | H4RR3, Hagmeister, qzr, Viktha, wenba      |
|            3 |     2188 | 2024-11-29 | Split ESC       | W   | 0.586      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.26 | H4RR3, Hagmeister, qzr, Viktha, wenba      |
|            2 |     2215 | 2024-11-28 | The Last Resort | W   | 0.580      | 0.333        | 0.000 (0.000)    | 0.032 (0.006)    | 0 (0.000) |     6.42 | H4RR3, Hagmeister, qzr, Viktha, wenba      |
|            1 |     2998 | 2024-11-08 | Monte           | L   | 0.446      | -            | -                | -                | -         |    -2.55 | H4RR3, Hagmeister, qzr, Viktha, wenba      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($293.23)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-07 |      0.639 | $99.15         | $63.37          |
| 2024-11-10 |      0.460 | $500.00        | $229.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
