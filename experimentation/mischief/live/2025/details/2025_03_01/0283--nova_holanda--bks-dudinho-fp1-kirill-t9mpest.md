### Roster Details<br />
Team Name: Nova holanda<br />
Roster: bks, dudinho, fP1, kirill, t9mpest<br />
Global Rank: [283](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [71]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  582.5<br />
<br />
Final Rank Value (582.5) = Starting Rank Value (592.4) + Head To Head Adjustments (-9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.216[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.098<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 592.4
- 400 + ( ( 0.098 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 592.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      775 | 2025-02-04 | Elevate                  | L   | 1.000      | -            | -                | -                | -         |   -17.94 | bks, dudinho, fP1, kirill, t9mpest  |
|            7 |     1454 | 2024-12-14 | SixBullets               | W   | 0.687      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.77 | bks, fP1, kirill, predict, t9mpest  |
|            6 |     2908 | 2024-11-09 | INTERDIT                 | L   | 0.454      | -            | -                | -                | -         |    -6.93 | bks, fP1, kirill, predict, Straafer |
|            5 |     2915 | 2024-11-09 | DB Peek Esports          | L   | 0.454      | -            | -                | -                | -         |    -8.52 | bks, fP1, kirill, predict, Straafer |
|            4 |     3038 | 2024-11-06 | Players (Brazilian team) | L   | 0.434      | -            | -                | -                | -         |    -4.33 | bks, fP1, kirill, predict, Straafer |
|            3 |     3093 | 2024-11-04 | INTERDIT                 | W   | 0.421      | 0.143        | 0.000 (0.000)    | 0.163 (0.010)    | 0 (0.000) |     6.90 | bks, fP1, kirill, predict, Straafer |
|            2 |     3187 | 2024-11-02 | DB Peek Esports          | W   | 0.407      | 0.143        | 0.000 (0.000)    | 0.257 (0.015)    | 0 (0.000) |     4.95 | bks, fP1, kirill, predict, Straafer |
|            1 |     3193 | 2024-11-02 | Game Hunters             | W   | 0.407      | 0.143        | 0.002 (0.000)    | 0.472 (0.027)    | 0 (0.000) |     8.18 | bks, fP1, kirill, predict, Straafer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($80.39)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.687 | $82.75         | $56.84          |
| 2024-11-08 |      0.447 | $52.69         | $23.54          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
