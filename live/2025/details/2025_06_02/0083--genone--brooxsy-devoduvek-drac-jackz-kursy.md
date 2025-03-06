### Roster Details<br />
Team Name: GenOne<br />
Roster: Brooxsy, devoduvek, drac, JACKZ, Kursy<br />
Global Rank: [83](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  641.6<br />
<br />
Final Rank Value (641.6) = Starting Rank Value (644.0) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.197[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.0
- 400 + ( ( 0.105 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 644.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      185 | 2025-02-17 | Hesta           | L   | 0.498      | -            | -                | -                | -         |    -9.88 | Brooxsy, devoduvek, drac, JACKZ, Kursy |
|            8 |      194 | 2025-02-17 | Bad News Eagles | W   | 0.497      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.10 | Brooxsy, devoduvek, drac, JACKZ, Kursy |
|            7 |      704 | 2025-01-10 | 9Pandas         | L   | 0.244      | -            | -                | -                | -         |    -2.17 | Brooxsy, devoduvek, drac, JACKZ, Kursy |
|            6 |      713 | 2025-01-09 | ECSTATIC        | W   | 0.236      | 0.417        | 0.008 (0.001)    | 0.830 (0.082)    | 0 (0.000) |     4.72 | Brooxsy, devoduvek, drac, JACKZ, Kursy |
|            5 |      719 | 2025-01-07 | ECSTATIC        | W   | 0.224      | 0.417        | 0.008 (0.001)    | 0.830 (0.078)    | 0 (0.000) |     4.56 | Brooxsy, devoduvek, drac, JACKZ, Kursy |
|            4 |      736 | 2024-12-29 | Wu-Tang Clan    | W   | 0.164      | 0.417        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.06 | Brooxsy, devoduvek, drac, JACKZ, Kursy |
|            3 |      741 | 2024-12-28 | BadGuys         | L   | 0.158      | -            | -                | -                | -         |    -3.35 | Brooxsy, devoduvek, drac, JACKZ, Kursy |
|            2 |      953 | 2024-12-09 | Chimera Esports | L   | 0.029      | -            | -                | -                | -         |    -0.39 | Brooxsy, devoduvek, drac, JACKZ, Kursy |
|            1 |     1050 | 2024-12-05 | BC.Game Esports | L   | 0.003      | -            | -                | -                | -         |    -0.05 | Brooxsy, devoduvek, drac, JACKZ, Kursy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7.50)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-05 |      0.003 | $3,000.00      | $7.50           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
