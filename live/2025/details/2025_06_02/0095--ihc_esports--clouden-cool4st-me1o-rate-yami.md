### Roster Details<br />
Team Name: IHC Esports<br />
Roster: clouden, cool4st, me1o, rate, yAmi<br />
Global Rank: [95](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  556.0<br />
<br />
Final Rank Value (556.0) = Starting Rank Value (555.5) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.5
- 400 + ( ( 0.067 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 555.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      467 | 2025-02-08 | The Huns Esports        | L   | 0.436      | -            | -                | -                | -         |    -3.48 | clouden, cool4st, me1o, rate, yAmi |
|            4 |      474 | 2025-02-08 | Nomads (Mongolian team) | W   | 0.436      | 0.143        | 0.000 (0.000)    | 0.098 (0.006)    | 0 (0.000) |     6.21 | clouden, cool4st, me1o, rate, yAmi |
|            3 |      748 | 2024-12-27 | The Huns Esports        | L   | 0.154      | -            | -                | -                | -         |    -1.22 | clouden, cool4st, me1o, rate, yAmi |
|            2 |      755 | 2024-12-26 | Eruption                | L   | 0.148      | -            | -                | -                | -         |    -0.88 | clouden, cool4st, me1o, rate, yAmi |
|            1 |     1019 | 2024-12-06 | Chinggis Warriors       | L   | 0.009      | -            | -                | -                | -         |    -0.10 | clouden, cool4st, me1o, rate, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($162.36)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.162 | $1,000.00      | $162.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
