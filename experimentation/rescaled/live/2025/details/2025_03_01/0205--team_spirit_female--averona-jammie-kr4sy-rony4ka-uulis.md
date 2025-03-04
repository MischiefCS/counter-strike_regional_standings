### Roster Details<br />
Team Name: Team Spirit Female<br />
Roster: AverOna, Jammie, kr4sy, Rony4ka, uulis<br />
Global Rank: [205](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [125]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  620.5<br />
<br />
Final Rank Value (620.5) = Starting Rank Value (616.4) + Head To Head Adjustments (4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 616.4
- 400 + ( ( 0.114 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 616.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1801 | 2024-10-27 | OneDay                     | W   | 0.367      | 0.250        | 0.000 (0.000)    | 0.060 (0.005)    | 0 (0.000) |     4.04 | AverOna, Jammie, kr4sy, Rony4ka, uulis |
|            7 |     1881 | 2024-10-18 | ENCE Athena                | W   | 0.306      | 0.424        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.53 | AverOna, Jammie, kr4sy, Rony4ka, uulis |
|            6 |     2279 | 2024-10-02 | Eco Warriors               | L   | 0.200      | -            | -                | -                | -         |    -1.70 | AverOna, Jammie, kr4sy, Rony4ka, uulis |
|            5 |     2539 | 2024-09-25 | NIP Impact                 | L   | 0.153      | -            | -                | -                | -         |    -1.87 | AverOna, Jammie, kr4sy, Rony4ka, uulis |
|            4 |     2843 | 2024-09-15 | Let Her Cook               | W   | 0.086      | 0.265        | 0.002 (0.000)    | 0.031 (0.001)    | 0 (0.000) |     1.40 | AverOna, Jammie, kr4sy, Rony4ka, uulis |
|            3 |     2893 | 2024-09-14 | Eco Warriors               | L   | 0.078      | -            | -                | -                | -         |    -0.68 | AverOna, Jammie, kr4sy, Rony4ka, uulis |
|            2 |     2974 | 2024-09-11 | Let Her Cook               | L   | 0.060      | -            | -                | -                | -         |    -0.91 | AverOna, Jammie, kr4sy, Rony4ka, uulis |
|            1 |     3168 | 2024-09-04 | Team Denmark (Female team) | W   | 0.013      | 0.424        | 0.008 (0.000)    | 0.067 (0.000)    | 0 (0.000) |     0.24 | AverOna, Jammie, kr4sy, Rony4ka, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($786.79)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.367 | $750.00        | $275.00         |
| 2024-10-20 |      0.320 | $1,400.00      | $447.42         |
| 2024-09-15 |      0.086 | $750.00        | $64.38          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
