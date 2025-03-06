### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [105](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [74]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  696.1<br />
<br />
Final Rank Value (696.1) = Starting Rank Value (691.9) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.9
- 400 + ( ( 0.134 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 691.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1261 | 2024-11-24 | Team Spirit  | L   | 0.117      | -            | -                | -                | -         |    -0.00 | isak, jocab, MisteM, r1nkle, REZ |
|            7 |     1269 | 2024-11-23 | 9Pandas      | W   | 0.114      | 0.143        | 0.071 (0.001)    | 0.281 (0.005)    | 1 (0.114) |     2.60 | isak, jocab, MisteM, r1nkle, REZ |
|            6 |     1295 | 2024-11-22 | TSM          | W   | 0.109      | 0.143        | 0.000 (0.000)    | 0.053 (0.001)    | 1 (0.109) |     0.92 | isak, jocab, MisteM, r1nkle, REZ |
|            5 |     1326 | 2024-11-21 | Team Falcons | L   | 0.101      | -            | -                | -                | -         |    -0.00 | isak, jocab, MisteM, r1nkle, REZ |
|            4 |     1344 | 2024-11-21 | PARIVISION   | W   | 0.096      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.096) |     0.71 | isak, jocab, MisteM, r1nkle, REZ |
|            3 |     1355 | 2024-11-20 | G2 Esports   | L   | 0.095      | -            | -                | -                | -         |    -0.06 | isak, jocab, MisteM, r1nkle, REZ |
|            2 |     1601 | 2024-11-09 | Metizport    | L   | 0.018      | -            | -                | -                | -         |    -0.20 | isak, jocab, MisteM, r1nkle, REZ |
|            1 |     1618 | 2024-11-08 | Alliance     | W   | 0.011      | 0.143        | 0.006 (0.000)    | 0.572 (0.001)    | 1 (0.011) |     0.22 | isak, jocab, MisteM, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($197.29)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.018 | $11,097.44     | $197.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
