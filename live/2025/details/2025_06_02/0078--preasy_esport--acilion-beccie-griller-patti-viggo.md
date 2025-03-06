### Roster Details<br />
Team Name: Preasy Esport<br />
Roster: AcilioN, Beccie, Griller, Patti, Viggo<br />
Global Rank: [78](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [54]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  662.8<br />
<br />
Final Rank Value (662.8) = Starting Rank Value (678.9) + Head To Head Adjustments (-16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.9
- 400 + ( ( 0.120 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 678.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       79 | 2025-02-23 | ARCRED                                    | L   | 0.539      | -            | -                | -                | -         |   -11.49 | AcilioN, Beccie, Griller, Patti, Viggo |
|            7 |       83 | 2025-02-23 | GardenGarage                              | W   | 0.538      | 0.143        | 0.000 (0.000)    | 0.098 (0.008)    | 0 (0.000) |     3.14 | AcilioN, Beccie, Griller, Patti, Viggo |
|            6 |       90 | 2025-02-23 | AMKAL ESPORTS                             | W   | 0.537      | 0.143        | 0.000 (0.000)    | 0.213 (0.016)    | 0 (0.000) |     5.18 | AcilioN, Beccie, Griller, Patti, Viggo |
|            5 |      237 | 2025-02-15 | RUBY                                      | L   | 0.484      | -            | -                | -                | -         |   -10.91 | AcilioN, Beccie, Griller, Patti, Viggo |
|            4 |      717 | 2025-01-07 | Copenhagen Wolves (American organization) | W   | 0.225      | 0.284        | 0.002 (0.000)    | 0.657 (0.042)    | 0 (0.000) |     3.86 | AcilioN, Beccie, Griller, Patti, Viggo |
|            3 |      795 | 2024-12-20 | Astralis Talent                           | L   | 0.103      | -            | -                | -                | -         |    -2.30 | AcilioN, Beccie, Equip, Griller, Viggo |
|            2 |      806 | 2024-12-19 | ADEPTS                                    | L   | 0.097      | -            | -                | -                | -         |    -2.22 | AcilioN, Beccie, Equip, Griller, Viggo |
|            1 |      808 | 2024-12-19 | KONO.ECF                                  | L   | 0.096      | -            | -                | -                | -         |    -1.37 | AcilioN, Beccie, Equip, Griller, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($450.28)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-07 |      0.225 | $2,000.00      | $450.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
