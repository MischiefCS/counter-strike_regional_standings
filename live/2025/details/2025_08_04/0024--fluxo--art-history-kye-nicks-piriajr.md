### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, history, kye, nicks, piriajr<br />
Global Rank: [24](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [5]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  772.5<br />
<br />
Final Rank Value (772.5) = Starting Rank Value (772.8) + Head To Head Adjustments (-0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.8
- 400 + ( ( 0.142 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 772.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      105 | 2025-02-22 | Imperial Esports | L   | 0.113      | -            | -                | -                | -         |    -1.17 | arT, history, kye, nicks, piriajr |
|            6 |      121 | 2025-02-21 | Team Solid       | W   | 0.106      | 0.371        | 0.009 (0.000)    | 0.300 (0.012)    | 0 (0.000) |     0.98 | arT, history, kye, nicks, piriajr |
|            5 |      302 | 2025-02-12 | Legacy           | L   | 0.047      | -            | -                | -                | -         |    -0.81 | arT, history, kye, nicks, piriajr |
|            4 |      306 | 2025-02-12 | Sharks Esports   | W   | 0.046      | 0.143        | 0.046 (0.000)    | 0.564 (0.004)    | 0 (0.000) |     0.82 | arT, history, kye, nicks, piriajr |
|            3 |      323 | 2025-02-11 | Legacy           | L   | 0.040      | -            | -                | -                | -         |    -0.69 | arT, history, kye, nicks, piriajr |
|            2 |      329 | 2025-02-11 | Imperial Esports | W   | 0.039      | 0.143        | 0.116 (0.001)    | 0.673 (0.004)    | 0 (0.000) |     0.83 | arT, history, kye, nicks, piriajr |
|            1 |      459 | 2025-02-08 | Imperial Esports | L   | 0.018      | -            | -                | -                | -         |    -0.18 | arT, history, kye, nicks, piriajr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($170.49)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.114 | $1,500.00      | $170.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
